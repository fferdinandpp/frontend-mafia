"use client";
import { useGetTransaction } from "@/hooks/useGetTransaction";
import { useParams } from "next/navigation";
import PakuIcon from "@/icons/paku-icon.svg";
import React from "react";
import CountdownTimer from "../(components)/Countdown";
import PaymentStatusCard from "../(components)/PaymentStatusCard";
import DetailTransactionCard from "../(components)/DetailTransactionCard";
import DetailAccountCard from "../(components)/DetailAccountCard";
import PaymentInformationCard from "../(components)/PaymentInformationCard";
import PaymentMethodCard from "../(components)/PaymentMethodCard";

type Props = {};

const page = (props: Props) => {
  const code = useParams().code?.toString();
  const { data, isLoading, error, isError } = useGetTransaction(code || "");

  return (
    <div className="w-11/12 xl:w-7xl mx-auto my-16">
      <div className="colored-box relative w-full text-white font-bold text-2xl text-center h-16 rounded-t-2xl">
        <PakuIcon className="absolute left-5 top-5" />
        <PakuIcon className="absolute right-5 top-5" />
      </div>

      <div className="bg-[url('/images/background/bg-transaksi.webp')] bg-cover bg-center w-full xl:w-[1240px] mx-auto">
        <div className="px-5 py-10 text-white">
          <h1 className="text-2xl  text-center w-full justify-center">
            Terimakasih!
          </h1>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-center w-full justify-center">
            Harap Lengkapi Pembayaran Kamu
          </h1>

          {data?.[0].payment_status === "PENDING" && (
            <>
              <CountdownTimer expired_at={data?.[0].expired_at} />
            </>
          )}

          {data?.[0].payment_status === "EXPIRED" && (
            <>
              <CountdownTimer expired_at={data?.[0].expired_at} />
            </>
          )}
          {data?.[0].payment_status === "BERHASIL" && (
            <>
              <CountdownTimer expired_at={data?.[0].expired_at} />
            </>
          )}

          <PaymentStatusCard
            reffId={code || ""}
            className="my-5"
            status={data?.[0].payment_status || ""}
          />

          <div className="block lg:flex w-full gap-5 mt-5">
            <div
              className={`space-y-5 w-full ${
                data?.[0].payment_status === "EXPIRED"
                  ? "lg:w-full"
                  : "lg:w-2/3"
              }`}
            >
              <DetailTransactionCard transaction={data?.[0]} />
              {data?.[0].nickname && (
                <DetailAccountCard transaction={data?.[0]} />
              )}
            </div>

            {/* {data?.[0].payment_status !== "EXPIRED" && ( */}
            <div className="w-full lg:w-1/3 block space-y-5 lg:mt-0 mt-5">
              <PaymentInformationCard transaction={data?.[0]} />
              {/* <PaymentMethodCard transaction={data?.[0]} /> */}
            </div>
            {/* )} */}
          </div>
        </div>
      </div>

      <div className="colored-box relative w-full text-white font-bold text-2xl text-center h-16 rounded-b-2xl">
        <PakuIcon className="absolute left-5 top-5" />
        <PakuIcon className="absolute right-5 top-5" />
      </div>
    </div>
  );
};

export default page;
