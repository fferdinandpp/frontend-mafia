import { ProductHistory } from "@/data/api/history/types";
import React from "react";
import { formatRupiah } from "@/libs/formatRupiah";

type Props = {
  transaction: ProductHistory | undefined;
};

const DetailTransactionCard = ({ transaction }: Props) => {
  let pajak;
  let hargaAwal;
  if (transaction?.price) {
    hargaAwal = transaction?.price - transaction?.price * 0.007;
    pajak = transaction?.price * 0.007;
  }
  return (
    <div className="bg-[url('/images/background/bg-card-transaksi.webp')] bg-cover bg-center rounded-2xl border border-white">
      <div className="w-full lg:w-3/4 mx-auto text-white py-10 ">
        <h2 className="text-white text-3xl font-bold text-center">
          DETAIL PEMBAYARAN
        </h2>
        <ul className="grid   pb-2 px-5 mt-5 text-2xl">
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Nomor Invoice</span>
            <span className="font-bold">: {transaction?.invoice_number}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Jenis Pembelian</span>
            <span className="font-bold">: {transaction?.product_name}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Produk</span>
            <span className="font-bold">: {transaction?.product}</span>
          </li>

          <li className=" pb-1 grid grid-cols-2 ">
            <span>Harga</span>
            <span className="font-bold">: {formatRupiah(hargaAwal)}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Jumlah</span>
            <span className="font-bold">: {transaction?.total}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Pajak</span>
            <span>:{formatRupiah(pajak)}</span>
          </li>
          <li className=" pb-1 grid grid-cols-2 ">
            <span>Total</span>
            <span className="font-bold">
              : {formatRupiah(transaction?.price)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailTransactionCard;
