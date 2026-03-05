"use client";
import { ProductHistory } from "@/data/api/history/types";
import React, { useState } from "react";
import { formatRupiah } from "@/libs/formatRupiah";
import Image from "next/image";
import { alertService } from "@/components/ui/alert/AlertContainer";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  transaction: ProductHistory | undefined;
};

const PaymentInformationCard = ({ transaction }: Props) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const handleDownload = () => {
    if (!transaction?.payment_information) return;

    const link = document.createElement("a");
    link.href = transaction.payment_information;
    link.download = `QR-${transaction.invoice_number || "payment"}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleCopy = () => {
    if (transaction?.payment_information) {
      navigator.clipboard.writeText(transaction.payment_information);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alertService.add("success", "VA Berhasil disalin", "Menyalin VA");
    }
  };
  return (
    <>
      <div className="bg-[url('/images/background/bg-card-transaksi.webp')] bg-cover bg-center border border-white rounded-2xl">
        {/* {transaction?.payment_method === "qris" &&
          transaction.payment_status !== "EXPIRED" && (
            <div className="flex flex-col items-center justify-center w-full py-5 px-5">
              <h2 className="text-2xl mb-5 font-bold">Scan QR di Bawah ini</h2>
              <Image
                src={transaction?.payment_information || ""}
                alt={transaction?.invoice_number || ""}
                width={279}
                height={279}
                className="rounded-xl"
              />

              <button
                onClick={handleDownload}
                className="cursor-pointer glass-card w-full py-2 mt-3 font-bold rounded-lg"
              >
                DOWNLOAD QR
              </button>
            </div>
          )} */}
        <div className="flex flex-col items-center justify-center w-full py-5 px-5">
          <h2 className="text-2xl mb-5 font-bold">Scan QR di Bawah ini</h2>
          <Image
            src={"/images/other/qris.jpeg"}
            alt={transaction?.invoice_number || ""}
            width={279}
            height={279}
            className="rounded-xl"
          />

          <p className="text-center text-white mt-5 text-sm">
            Setelah anda menyelesaikan pembayaran, mohon hubungi admin untuk
            mengkonfirmasi pesanan anda{" "}
          </p>
          <Link
            href="https://linktr.ee/"
            target="_blank"
            className="cursor-pointer text-center glass-card w-full py-2 mt-3 font-bold rounded-lg"
          >
            KONFIRMASI PESANAN
          </Link>
        </div>
        {transaction?.payment_method !== "qris" && (
          <div className="flex flex-col items-center justify-center w-full py-5 px-5">
            <h1 className="text-xl font-bold text-white">
              {transaction?.payment_information}
            </h1>
            <button
              onClick={handleCopy}
              className="cursor-pointer glass-card w-full py-2 mt-3 font-bold rounded-lg"
            >
              {copied ? "Code Copied!" : "Copy Virtual Account"}
            </button>
          </div>
        )}
      </div>
      {/* {transaction?.payment_method === "qris" && (
        <button
          onClick={() => router.push(transaction.payment_information)}
          className=" cursor-pointer text-white bg-[#102D45]/21 w-full py-2 border border-white rounded-lg"
        >
          Klik ini jika QR tidak muncul
        </button>
      )} */}
    </>
  );
};

export default PaymentInformationCard;
