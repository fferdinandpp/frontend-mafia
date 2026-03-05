"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Interface tidak perlu diubah
interface TabelData {
  created_at: string;
  phone_number: string;
  price: number;
  payment_status: string;
  invoice_number: string;
  product: string;
  product_name: string;
}
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
interface PageData {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_page: number;
}
interface TabelProps {
  invoiceData: TabelData[] | null;
  pageData: PageData | null;
  onPageChange: (page: number) => void;
}

const TabelRiwayat: React.FC<TabelProps> = ({
  invoiceData,
  pageData,
  onPageChange,
}) => {
  if (!invoiceData || !Array.isArray(invoiceData) || invoiceData.length === 0) {
    return null;
  }

  const router = useRouter();

  const getStatusComponent = (payment_status: string) => {
    let classes = "";
    switch (payment_status.toUpperCase()) {
      case "BERHASIL":
      case "SELESAI":
        classes = "bg-green-500 text-white";
        break;
      case "PENDING":
        classes = "bg-yellow-500 text-black";
        break;
      case "EXPIRED":
      case "DITOLAK":
      case "REJECTED":
        classes = "bg-red-500 text-white";
        break;
      default:
        classes = "bg-gray-500 text-white";
        break;
    }
    return (
      <div
        className={`px-3 py-2 font-bold text-white rounded-lg text-center ${classes}`}
      >
        {payment_status}
      </div>
    );
  };

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  const handleOnclickDetal = (reff_number: string) => {
    router.push(`/riwayat/${reff_number}`);
  };

  const headers = [
    "Tanggal",
    "Produk",
    "Jenis",
    "Nomor Invoice",
    "Nomor Hp",
    "Harga",
    "Status",
    "Aksi",
  ];

  return (
    <div className="p-6 ">
      <h2 className="text-xl font-medium text-black">Daftar Riwayat Pesanan</h2>
      <div className=" ">
        <div className="mb-6 space-y-3 mt-5 text-black ">
          <p>
            Ini adalah semua transaksi yang pernah kamu lakukan, Informasi yang
            tersedia mencakup tanggal transaksi, kode invoice, nomor ponsel,
            harga, dan status.
          </p>
          <p className=" text-black ">
            Riwayat Transaksi Ini Diurutkan Dari Pesanan Terbaru
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-separate">
            <thead>
              <tr className="bg-[#2655FE]  text-white text-sm font-semibold rounded-lg">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="p-3 first:rounded-tl-lg last:rounded-tr-lg"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {/* <tr className="h-3"></tr> */}
              {invoiceData.map((data) => (
                <tr
                  className="first:rounded-tl-lg last:rounded-tr-lg"
                  key={data.invoice_number}
                >
                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center">
                    {new Date(data.created_at).toLocaleDateString("id-ID")}
                  </td>
                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center">
                    {data.product}
                  </td>

                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center">
                    {data.product_name}
                  </td>

                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center font-mono">
                    {data.invoice_number}
                  </td>

                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center">
                    {data.phone_number}
                  </td>

                  <td className="px-3 font-bold py-4 bg-[#141A2F] text-[#2655FE] text-center">
                    {formatter.format(data.price)}
                  </td>
                  <td className="px-4  py-1 bg-[#141A2F] ">
                    {getStatusComponent(data.payment_status)}
                  </td>
                  <td className="px-4  py-1 bg-[#141A2F] ">
                    <button
                      onClick={() => handleOnclickDetal(data.invoice_number)}
                      className="w-full cursor-pointer h-full px-3 py-2 font-bold text-[#2655FE] bg-white border hover:bg-gray-200 transition-colors"
                    >
                      Lihat Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pageData && pageData.total_page > 1 && (
          <Pagination
            currentPage={pageData.current_page}
            totalPages={pageData.total_page}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-8 gap-x-2">
      <button
        className="p-2 w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`w-10 h-10 rounded-md font-bold ${
            currentPage === number
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="p-2 w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default TabelRiwayat;
