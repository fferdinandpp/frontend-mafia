"use client";
import React, { Fragment, useMemo, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Modal from "@/components/ui/modal/Modal";
import { AccountDetail } from "@/data/api/account-market/get-detail";
import { useCreateTransaction } from "@/hooks/useCreateTransaction";
import { CreateTransaction } from "@/data/api/account-market/create-buy-account";
import { alertService } from "@/components/ui/alert/AlertContainer";
import { Listbox, Transition } from "@headlessui/react";
import { Payment, payment } from "@/data/dummy/payment";
import Image from "next/image";
import { useGetVouchers } from "@/hooks/useGetVoucher";
import { VoucherData } from "@/data/api/voucher/types";
import { formatRupiah } from "@/libs/formatRupiah";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const PaymentOptionDisplay = ({ payment }: { payment: Payment }) => (
  <div className="flex items-center space-x-3">
    <Image
      src={payment.logo}
      alt={payment.name}
      className="h-6 w-10 object-contain flex-shrink-0"
      width={40}
      height={24}
    />
    <p className="block truncate text-[#0B3CAA] font-bold">
      {payment.title || payment.name.toUpperCase()}
    </p>
  </div>
);

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: AccountDetail | undefined;
};

type FormValues = Omit<CreateTransaction, "account_code"> & {
  voucher_code?: string;
};

const BeliAkunModal = ({ isOpen, onClose, data }: Props) => {
  const { data: vouchers } = useGetVouchers();
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      payment_type: "full",
      voucher_code: "",
    },
  });

  const {
    mutate,
    isPending,
    isError,
    error,
    reset: resetMutation,
  } = useCreateTransaction();

  const selectedPaymentName = watch("payment_method");
  const typedVoucherCode = watch("voucher_code");

  const basePrice = Number(data?.discount_price) || 0;

  // Mencari voucher yang valid berdasarkan input
  const selectedVoucher = useMemo(() => {
    if (!typedVoucherCode) return null;
    return vouchers?.find(
      (v) => v.code.toUpperCase() === typedVoucherCode.toUpperCase()
    );
  }, [vouchers, typedVoucherCode]);

  // Kalkulasi Pajak, Diskon, dan Total
  const { taxAmount, discountAmount, totalPayment } = useMemo(() => {
    let tax = 0;
    const selectedOpt = payment.find((p) => p.name === selectedPaymentName);
    if (selectedOpt) {
      tax =
        selectedOpt.type === "flat"
          ? selectedOpt.tax
          : basePrice * selectedOpt.tax;
    }

    let discount = 0;
    if (selectedVoucher && basePrice >= Number(selectedVoucher.min_purchase)) {
      discount = Number(selectedVoucher.discount);
    }

    const total = basePrice + tax - discount;
    return {
      taxAmount: tax,
      discountAmount: discount,
      totalPayment: total > 0 ? total : 0,
    };
  }, [selectedPaymentName, basePrice, selectedVoucher]);

  // Fungsi saat user klik tombol "Gunakan" atau pilih dari modal
  const handleApplyVoucher = (code: string) => {
    const found = vouchers?.find(
      (v) => v.code.toUpperCase() === code.toUpperCase()
    );

    if (found) {
      if (basePrice < Number(found.min_purchase)) {
        alertService.add(
          "error",
          `Minimal pembelian ${formatCurrency(
            Number(found.min_purchase)
          )} untuk menggunakan voucher ini.`,
          "Voucher Tidak Valid"
        );
        return;
      }
      setValue("voucher_code", found.code);
      alertService.add(
        "success",
        `Voucher ${found.code} berhasil digunakan!`,
        "Berhasil"
      );
      setIsVoucherModalOpen(false);
    } else {
      alertService.add("error", "Kode voucher tidak ditemukan.", "Gagal");
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    if (!data?.code) {
      alertService.add(
        "error",
        "Data akun tidak ditemukan",
        "Gagal Membeli Akun"
      );
      return;
    }
    mutate({
      data: { ...formData, account_code: data.code },
    });
  };

  const handleClose = () => {
    reset();
    resetMutation();
    onClose();
  };

  return (
    <>
      <Modal
        title={`Beli Akun ${data?.name}`}
        isOpen={isOpen}
        onClose={handleClose}
        widthClass="max-w-2xl"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-100">
              Kode Akun
            </label>
            <input
              type="text"
              disabled
              value={data?.code || ""}
              className="mt-1 block w-full font-bold rounded-md border-transparent bg-blue-500 px-4 py-2 text-blue-100 cursor-not-allowed"
            />
          </div>

          <InputGroup label="Email" error={errors.email?.message}>
            <input
              type="email"
              placeholder="user@gmail.com"
              className={inputStyle(!!errors.email)}
              {...register("email", { required: "Email wajib diisi" })}
            />
          </InputGroup>

          <InputGroup
            label="Nomor WhatsApp"
            error={errors.whatsapp_number?.message}
          >
            <input
              type="text"
              placeholder="08123456789"
              className={inputStyle(!!errors.whatsapp_number)}
              {...register("whatsapp_number", {
                required: "Nomor WhatsApp wajib diisi",
              })}
            />
          </InputGroup>

          <InputGroup label="Voucher (Opsional)">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="KODE VOUCHER"
                className={inputStyle(false) + " uppercase flex-1"}
                {...register("voucher_code")}
              />
              <button
                type="button"
                onClick={() => handleApplyVoucher(typedVoucherCode || "")}
                className="bg-blue-600 border border-white cursor-pointer hover:bg-blue-500 text-white px-4 py-2 rounded-md font-bold transition-colors"
              >
                Gunakan
              </button>
            </div>
            {selectedVoucher && (
              <p className="mt-1 text-xs text-green-300">
                ✓ Voucher aktif: {selectedVoucher.name}
              </p>
            )}
            <button
              type="button"
              onClick={() => setIsVoucherModalOpen(true)}
              className="bg-white mt-2 w-full hover:bg-gray-100 cursor-pointer text-[#0B3CAA] px-4 py-2 rounded-md font-bold transition-colors"
            >
              Lihat voucher tersedia
            </button>
          </InputGroup>
          <InputGroup
            label="Metode Pembayaran"
            error={errors.payment_method?.message}
          >
            <Controller
              name="payment_method"
              control={control}
              rules={{ required: "Metode pembayaran wajib dipilih" }}
              render={({ field }) => {
                const selectedPayment = payment.find(
                  (p) => p.name === field.value
                );
                return (
                  <Listbox
                    value={selectedPayment}
                    onChange={(val) => field.onChange(val?.name || "")}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={
                          inputStyle(!!errors.payment_method) +
                          " relative w-full text-left py-2 pl-4 pr-10"
                        }
                      >
                        {selectedPayment ? (
                          <PaymentOptionDisplay payment={selectedPayment} />
                        ) : (
                          <span className="text-blue-200">
                            -- Pilih Pembayaran --
                          </span>
                        )}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-blue-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 3a.75.75 0 01.53.22l3.5 3.5a.75.75 0 01-1.06 1.06L10 4.81 6.53 8.28a.75.75 0 01-1.06-1.06l3.5-3.5A.75.75 0 0110 3zM2.78 12.03a.75.75 0 011.06 0L10 18.19l6.16-6.16a.75.75 0 111.06 1.06l-6.5 6.5a.75.75 0 01-1.06 0l-6.5-6.5a.75.75 0 010-1.06z" />
                          </svg>
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg focus:outline-none">
                          {payment.map((item) => (
                            <Listbox.Option
                              key={item.id}
                              value={item}
                              className={({ active }) =>
                                `cursor-pointer select-none py-2 px-4 ${
                                  active ? "bg-blue-50" : ""
                                }`
                              }
                            >
                              <PaymentOptionDisplay payment={item} />
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                );
              }}
            />
          </InputGroup>

          {basePrice > 0 && (
            <div className="space-y-2 rounded-lg bg-blue-700 p-4 border border-blue-500">
              <h3 className="text-lg font-semibold text-white mb-3 text-center border-b border-blue-500 pb-2">
                Ringkasan Pembayaran
              </h3>
              <div className="flex justify-between text-blue-100">
                <span>Harga Akun</span>
                <span>{formatCurrency(basePrice)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-400 font-medium italic">
                  <span>Potongan Voucher</span>
                  <span>-{formatCurrency(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-blue-100">
                <span>Biaya Admin</span>
                <span>{formatCurrency(taxAmount)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-blue-500 mt-2">
                <span>Total Bayar</span>
                <span className="text-yellow-400">
                  {formatCurrency(totalPayment)}
                </span>
              </div>
            </div>
          )}

          <InputGroup label="Catatan (Opsional)">
            <textarea
              placeholder="Pesan tambahan untuk penjual..."
              className={inputStyle(false)}
              rows={3}
              {...register("notes")}
            />
          </InputGroup>

          <div className="pt-4">
            {isError && (
              <div className="mb-4 rounded-md bg-red-800 p-3 text-center text-sm font-medium text-white">
                Error: {error?.message || "Terjadi kesalahan"}
              </div>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-md bg-blue-800 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-900 disabled:opacity-70"
            >
              {isPending ? "Memproses..." : "Beli Sekarang"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Modal Daftar Voucher */}
      <VoucherListModal
        isOpen={isVoucherModalOpen}
        onClose={() => setIsVoucherModalOpen(false)}
        vouchers={vouchers || []}
        onSelect={handleApplyVoucher}
        basePrice={basePrice}
      />
    </>
  );
};

const VoucherListModal = ({
  isOpen,
  onClose,
  vouchers,
  onSelect,
  basePrice,
}: {
  isOpen: boolean;
  onClose: () => void;
  vouchers: VoucherData[];
  onSelect: (code: string) => void;
  basePrice: number;
}) => {
  return (
    <Modal
      title="Pilih Voucher"
      isOpen={isOpen}
      onClose={onClose}
      widthClass="max-w-md"
    >
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {vouchers.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            Tidak ada voucher tersedia.
          </p>
        ) : (
          vouchers.map((v) => {
            const isDisabled = basePrice < Number(v.min_purchase);
            return (
              <div
                key={v.id}
                onClick={() => !isDisabled && onSelect(v.code)}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isDisabled
                    ? "bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed"
                    : "bg-blue-50 border-blue-200 hover:border-blue-500"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-900">{v.name}</h4>
                    <p className="text-xs font-mono font-bold text-blue-600 bg-blue-200 inline-block px-2 py-0.5 rounded mt-1">
                      {v.code}
                    </p>
                  </div>
                  {/* <div className="text-right">
                    <span className="text-sm font-bold text-green-600">
                      -{formatRupiah(Number(v.discount))}
                    </span>
                  </div> */}
                </div>
                <div className="mt-3 text-[10px] text-gray-500 flex justify-between border-t pt-2">
                  <span>Min. Belanja: {v.min_purchase}</span>
                  <span>Berakhir: {v.end_date}</span>
                </div>
                {isDisabled && (
                  <p className="text-[10px] text-red-500 mt-1 font-semibold">
                    Belum mencapai minimal pembelian.
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </Modal>
  );
};

const inputStyle = (isError: boolean) => `
  block w-full rounded-md border-transparent bg-white px-4 py-2 
  text-[#0B3CAA] font-medium placeholder-gray-400
  ${isError ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-blue-400"}
`;

const InputGroup = ({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-blue-100 mb-1">
      {label}
    </label>
    {children}
    {error && <p className="mt-1 text-sm text-red-300 font-medium">{error}</p>}
  </div>
);

export default BeliAkunModal;
