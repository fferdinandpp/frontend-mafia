import { TAccountFilters } from "@/data/api/account-market/get-account";
import { useGetAccountList } from "@/hooks/useAccountList";
import { formatRupiah } from "@/libs/formatRupiah";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbLoader3 } from "react-icons/tb";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const highlightText = (text: string, highlight: string) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-300 text-black">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const FindAccount = ({ search, setSearch }: Props) => {
  const searchAccount: TAccountFilters = { search };
  const { data, isLoading, error, isError } = useGetAccountList(searchAccount);

  return (
    <>
      {search && (
        <div className="w-11/12 sm:w-[650px] xl:w-2/5 mx-auto bg-[#0A3DAB]/90 border-x-4 border-t-0 border-b-4 border-[#105BFF] rounded-b-2xl shadow-2xl fixed xl:top-[65px]  top-20 z-50 left-1/2 -translate-x-1/2 backdrop-blur-[10px] animate-fadeIn">
          <div className="px-4 py-4 overflow-y-auto overflow-x-hidden max-h-[65vh]">
            <div className="flex flex-col gap-5">
              {isLoading && (
                <div className="text-white text-center  ">
                  <div className="flex flex-col gap-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-4 p-3 rounded-xl bg-[#031A45]/60 shadow-sm animate-pulse"
                      >
                        <div className="w-16 h-16 rounded-xl bg-gray-300/30" />
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-300/50 rounded w-2/3"></div>
                          <div className="h-3 bg-gray-300/30 rounded w-1/4"></div>
                          <div className="h-5 bg-gray-300/30 rounded w-1/3"></div>
                        </div>
                        <div>
                          <div className="px-4 py-2 rounded bg-gray-300/40"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {isError && (
                <div className="text-red-400 text-center py-10">
                  Terjadi error
                </div>
              )}
              {data?.data?.length === 0 && (
                <div className="text-white text-center py-10">
                  Tidak ada akun ditemukan.
                </div>
              )}

              {data?.data?.map((item) => (
                <Link
                  href={`/beli-akun/${item.code}`}
                  key={item.code}
                  onClick={() => setSearch("")}
                  className="flex items-center relative space-x-4 p-3 rounded-xl bg-[#031A45]/60 hover:bg-[#254DEB]/70 shadow-sm hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[#65aaff] cursor-pointer"
                >
                  <div className="w-16 h-16 min-w-[4rem] rounded-xl overflow-hidden bg-white/10 border border-[#105BFF]">
                    <Image
                      alt={item.name}
                      src={item.images[0]?.image || "/images/noimg.webp"}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-lg font-bold text-white truncate">
                      {highlightText(item.name, search)}
                    </span>
                    <span className="text-[#9fc4ff] text-xs font-medium">
                      Kode: {item.code}
                    </span>
                    <div className="sm:flex-row flex-col-reverse flex items-start sm:items-center gap-0 sm:gap-2 mt-1">
                      <span className="font-bold text-[#F7A31A] text-lg">
                        {formatRupiah(item.discount_price)}
                      </span>
                      {item.discount && (
                        <span className="line-through text-xs text-white/50">
                          {formatRupiah(item.price)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 sm:inline hidden rounded text-xs font-semibold ${
                        item.status === "sold"
                          ? "bg-red-600/90 text-white"
                          : "bg-lime-500/80 text-black"
                      }`}
                    >
                      {item.status === "sold" ? "SOLD" : "READY"}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 sm:hidden inline absolute bottom-3 right-3 rounded text-xs font-semibold ${
                        item.status === "sold"
                          ? "bg-red-600/90 text-white"
                          : "bg-green-500/80 text-white"
                      }`}
                    >
                      {item.status === "sold" ? "SOLD" : "READY"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FindAccount;
