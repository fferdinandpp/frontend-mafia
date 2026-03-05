import { ProductAccountMarket } from "@/data/api/account-market/get-account";
import { formatRupiah } from "@/libs/formatRupiah";
import { harabaraMaisDemo } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  account: ProductAccountMarket;
  variant?: "blue" | "yellow";
};

const AccountCard = ({ account, variant = "blue" }: Props) => {
  const pathname = usePathname();
  const borderColor = variant === "yellow" ? "#FFC300" : "#0095FF";

  return (
    <Link
      href={`/beli-akun/${account.code}`}
      className="flex flex-col items-center w-fit mx-auto"
    >
      <div
        style={{ borderColor }}
        className={`bg-button w-fit pb-2 rounded-xl border-2 ${harabaraMaisDemo.className}`}
      >
        <Image
          src={account.images[0].image || ""}
          alt={account.name}
          width={402}
          height={504}
          className={`rounded-t-xl xl:w-[402px] ${
            pathname === "/" ? "w-full" : "w-[230px]"
          } `}
        />
        <div className="my-5">
          <div className="w-11/12 mx-auto">
            <h2 className="text-white font-bold text-xl xl:text-2xl w-36 xl:w-64 truncate">
              {account.name}
            </h2>
            <h3 className="  text-base line-through text-white font-semibold">
              {formatRupiah(account.price)}
            </h3>
            <h3 className="  text-2xl  text-white font-semibold">
              {formatRupiah(account.price)}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AccountCard;
