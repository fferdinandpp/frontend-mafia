"use client";
import React, { useRef, useState } from "react";
import PakuIcon from "@/icons/paku-icon.svg";
import { getHistory } from "@/data/api/history/get-history";
import TabelRiwayat from "./(components)/TabelRiwayat";
interface PageData {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_page: number;
}
export default function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const tabelRef = useRef<HTMLDivElement>(null);
  const [invoiceData, setInvoiceData] = useState<any[]>([]);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullData, setFullData] = useState<any[]>([]);

  const scrollToTabel = () => {
    if (tabelRef.current) {
      tabelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fetchData = async () => {
    if (!searchTerm.trim()) {
      setErrorMessage("Nomor Invoice atau nomor telepon tidak boleh kosong.");
      setShowHistory(false);
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setShowHistory(false);

    try {
      const responseData = await getHistory(searchTerm);
      if (Array.isArray(responseData) && responseData.length > 0) {
        setFullData(responseData);
        paginateData(responseData, 1);
        setShowHistory(true);
        setTimeout(scrollToTabel, 100);
      } else {
        setErrorMessage("Data tidak ditemukan.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  const paginateData = (dataToPaginate: any[], page: number) => {
    const slicedData = dataToPaginate.slice((page - 1) * 10, page * 10);
    const total = dataToPaginate.length;
    const totalPage = Math.ceil(total / 10);
    const pageInfo: PageData = {
      total,
      count: slicedData.length,
      per_page: 10,
      current_page: page,
      total_page: totalPage,
    };
    setPageData(pageInfo);
    setInvoiceData(slicedData);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handlePageChange = (page: number) => {
    paginateData(fullData, page);
    scrollToTabel();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-11/12 xl:w-7xl mx-auto my-16">
        <div className="colored-box relative w-full text-white font-bold text-2xl text-center h-16 rounded-t-2xl">
          <PakuIcon className="absolute left-5 top-5" />
          <PakuIcon className="absolute right-5 top-5" />
        </div>

        <div className="bg-[url('/images/background/bg-transaksi.webp')] bg-cover bg-center w-full xl:w-[1240px] mx-auto">
          <div className="px-5 py-10 text-white">
            <h1 className="xl:text-2xl font-bold text-center">
              Lacak Pesanan Kamu dengan nomor Invoice!
            </h1>
            <h2 className="text-base xl:text-xl  text-center font-medium mt-1">
              Pesanan Kamu tidak terdaftar meskipun Kamu yakin telah memesan?
              Harap tunggu 1-5 menit. Tetapi jika pesanan masih belum muncul,
              Kamu bisa Hubungi Kami
            </h2>

            <div className="flex items-center w-full space-x-3 mt-3 justify-between">
              <input
                className="w-10/12 py-4 px-3 rounded-xl glass-card text-white font-bold text-xl"
                placeholder="Masukkan nomor invoice"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={loading}
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-2/12 rounded-xl cursor-pointer py-4 px-3 bg-[url('/images/background/search-bg.webp')] text-center text-white font-bold"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                  </div>
                ) : (
                  "CARI"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="colored-box relative w-full text-white font-bold text-2xl text-center h-16 rounded-b-2xl">
          <PakuIcon className="absolute left-5 top-5" />
          <PakuIcon className="absolute right-5 top-5" />
        </div>
      </div>
      <div ref={tabelRef} className="bg-white">
        {showHistory && (
          <div className=" w-11/12 xl:w-7xl mx-auto">
            <TabelRiwayat
              invoiceData={invoiceData}
              pageData={pageData}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </>
  );
}
