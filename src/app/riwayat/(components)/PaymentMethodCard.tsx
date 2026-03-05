"use client";
import { ProductHistory } from "@/data/api/history/types";
import React from "react";
import { formatRupiah } from "@/libs/formatRupiah";
import Image from "next/image";
import { payment } from "@/data/dummy/payment";
import { useRouter } from "next/navigation";

type Props = {
  transaction: ProductHistory | undefined;
};

const PaymentMethodCard = ({ transaction }: Props) => {
  const paymentMethod = payment.find(
    (item) => item.name === transaction?.payment_method
  );

  const router = useRouter();
  return (
    <div className="bg-[#EAEAEA] rounded-xl">
      <div className="w-11/12 mx-auto py-8 text-[#253B58] font-semibold">
        <h3 className="text-center mb-5">
          Metode Pembayaran:{" "}
          <span className="uppercase">{transaction?.payment_method}</span>
        </h3>
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src={paymentMethod?.logo || ""}
            alt={transaction?.invoice_number || ""}
            width={150}
            height={150}
          />

          {transaction?.payment_method === "qris" && (
            <button
              onClick={() =>
                router.push(transaction?.payment_information || "")
              }
              className="mt-5 text-white bg-[#0C44A1] py-2 rounded-lg font-bold  border w-full text-sm border-[#0C44A1]  hover:bg-[#0C44A1] hover:text-white transition-all duration-150 ease-in-out cursor-pointer"
            >
              Klik ini jika QR tidak muncul
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
