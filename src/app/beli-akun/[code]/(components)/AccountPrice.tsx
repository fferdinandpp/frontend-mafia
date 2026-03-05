import { AccountDetail } from "@/data/api/account-market/get-detail";
import { formatRupiah } from "@/libs/formatRupiah";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AccountPrice = ({
  account,
  onClick,
}: {
  account: AccountDetail | undefined;
  onClick: () => void;
}) => {
  const router = useRouter();
  return (
    <div className="bg-[#0B3CAA] px-5 py-4 rounded-xl text-white w-full">
      <div className="flex flex-col md:flex-row items-end xl:items-center  w-full justify-between">
        <div className="flex  items-center xl:justify-start justify-between w-full space-x-0 xl:space-x-5">
          <h2 className="text-3xl xl:text-4xl  font-bold">
            {account && formatRupiah(account.discount_price)}
          </h2>
          <h3 className="px-3 py-1 rounded-lg  text-xl xl:text-2xl text-red-700 line-through">
            {account && formatRupiah(account.selling_price)}
          </h3>
        </div>
        <h4
          className={`px-3 py-1 rounded-lg  text-2xl tombol  font-bold ${
            account?.status === "Tersedia"
              ? "text-[#00FF48]  tombol-hijau"
              : "text-[#ffd000]  tombol-oranye "
          }`}
        >
          {account && account.status}
        </h4>
      </div>
      <div className="flex md:flex-row flex-col justify-between w-full  md:space-x-3  md:space-y-0 space-y-3 mt-3">
        <div
          // onClick={() =>
          //   router.push(account?.link_wa ?? account?.link_tele ?? "")
          // }
          onClick={() => router.push("https://wa.me/6289682143675")}
          className="cursor-pointer  glass-card w-full xl:w-1/3 font-bold text-white text-2xl xl:text-4xl px-5  rounded-xl flex items-center justify-center"
        >
          NEGO?
        </div>
        <div
          onClick={onClick}
          className="w-full xl:w-2/3 cursor-pointer text-[#0B3CAA] text-center font-bold bg-white text-2xl xl:text-4xl px-10 py-3 rounded-xl flex flex-col justify-center"
        >
          <p>BELI SEKARANG</p>
          <p className="font-medium text-lg xl:text-base">
            Data Akun Akan Terkirim Otomatis
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountPrice;
