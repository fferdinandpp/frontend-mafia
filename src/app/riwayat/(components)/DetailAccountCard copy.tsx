import { ProductHistory } from "@/data/api/history/types";
import React from "react";

import { formatRupiah } from "@/libs/formatRupiah";

type Props = {
  transaction: ProductHistory | undefined;
};

const DetailAccountCard = ({ transaction }: Props) => {
  let pajak;
  let hargaAwal;
  if (transaction?.price) {
    hargaAwal = transaction?.price - transaction?.price * 0.007;
    pajak = transaction?.price * 0.007;
  }
  return (
    <div className="bg-[url('/images/background/bg-card-transaksi.webp')] bg-cover bg-center">
      <div className="w-full lg:w-3/4 mx-auto text-[#253B58]">
        <ul className="grid   pb-2 px-5">
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Nickname</span>
            <span className="font-bold">: {transaction?.nickname}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>User ID</span>
            <span className="font-bold">: {transaction?.game_id}</span>
          </li>
          {/* <li className=" pb-1 grid grid-cols-2 ">
            <span>Server ID</span>
            <span className="font-bold">: {transaction?.}</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default DetailAccountCard;
