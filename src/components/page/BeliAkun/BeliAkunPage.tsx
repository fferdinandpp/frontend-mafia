"use client";

import React, { useState } from "react";
import AccountList from "./AccountList";
import { TAccountFilters } from "@/data/api/account-market/get-account";
import { harabaraMaisDemo } from "@/utils/font";
import { FaChevronDown } from "react-icons/fa";

const gameOptions = [
  {
    label: "Semua",
    value: "",
    icon: "/images/game/all.webp",
  },
  {
    label: "Efootball",
    value: "efootball",
    icon: "/images/game/efootball.webp",
  },
  {
    label: "FC Mobile",
    value: "fc-mobile",
    icon: "/images/game/fcmobile.webp",
  },
];

export default function BeliAkunPage() {
  const [game, setGame] = useState<string>("");

  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [activeFilters, setActiveFilters] = useState<
    Omit<TAccountFilters, "page" | "limit">
  >({});

  const [openGame, setOpenGame] = useState(false);

  const selectedGame =
    gameOptions.find((g) => g.value === game) || gameOptions[0];

  const formatRupiah = (value: string) => {
    const numberString = value.replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    return rupiah;
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(formatRupiah(e.target.value));
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(formatRupiah(e.target.value));
  };

  const handleSearch = () => {
    const newFilters: Omit<TAccountFilters, "page" | "limit"> = {
      game: game || undefined,
      min_price: minPrice ? Number(minPrice.replace(/\./g, "")) : undefined,
      max_price: maxPrice ? Number(maxPrice.replace(/\./g, "")) : undefined,
    };

    setActiveFilters(newFilters);
  };

  const handleReset = () => {
    setGame("");
    setMinPrice("");
    setMaxPrice("");
    setActiveFilters({});
  };

  return (
    <div>
      <div className="bg-[url('/images/background/bg-beli-akun.webp')] bg-cover bg-center w-full min-h-screen">
        {/* FILTER */}
        <div className="w-11/12 xl:w-6xl mx-auto py-10">
          <div
            className="
            bg-[url('/images/filter/bg-filter.webp')]
            rounded-2xl
            bg-cover bg-center
            border-2 border-[#0144FE]
            px-6 py-6
          "
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-5 gap-6 items-end ${harabaraMaisDemo.className}`}
            >
              {/* GAME DROPDOWN */}
              <div className="flex flex-col relative">
                <label className="text-lg text-gray-300 mb-1">Game</label>

                <button
                  onClick={() => setOpenGame(!openGame)}
                  className="
                  flex items-center justify-between
                  rounded-xl px-4 py-3
                  bg-gradient-to-r from-blue-600 to-blue-400
                  text-white
                "
                >
                  <div className="flex items-center gap-2">
                    <img src={selectedGame.icon} className="w-5 h-5" />
                    {selectedGame.label}
                  </div>

                  <FaChevronDown />
                </button>

                {openGame && (
                  <div
                    className="
                    absolute top-full left-0 w-full
                    bg-[#1b2030]
                    rounded-xl mt-2
                    overflow-hidden
                    border border-blue-500
                    z-50
                  "
                  >
                    {gameOptions.map((item) => (
                      <div
                        key={item.value}
                        onClick={() => {
                          setGame(item.value);
                          setOpenGame(false);
                        }}
                        className="
                        flex items-center gap-2
                        px-4 py-3
                        hover:bg-blue-600
                        cursor-pointer
                      "
                      >
                        <img src={item.icon} className="w-5 h-5" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* HARGA MIN */}
              <div className="flex flex-col">
                <label className="text-lg text-gray-300 mb-1">
                  Harga Minimal
                </label>

                <input
                  value={minPrice}
                  onChange={handleMinPrice}
                  placeholder="Rp 0"
                  className="
                  rounded-xl px-4 py-3
                  bg-gradient-to-r from-blue-600 to-blue-400
                  text-white
                  placeholder:text-gray-200
                "
                />
              </div>

              {/* HARGA MAX */}
              <div className="flex flex-col">
                <label className="text-lg text-gray-300 mb-1">
                  Harga Maksimal
                </label>

                <input
                  value={maxPrice}
                  onChange={handleMaxPrice}
                  placeholder="Rp 0"
                  className="
                  rounded-xl px-4 py-3
                  bg-gradient-to-r from-blue-600 to-blue-400
                  text-white
                  placeholder:text-gray-200
                "
                />
              </div>

              {/* BUTTON SEARCH */}
              <button
                onClick={handleSearch}
                className="
                h-[48px]
                bg-gradient-to-r from-blue-600 to-blue-400
                hover:scale-105
                transition
                rounded-xl
                font-semibold
                text-white
                shadow-lg
              "
              >
                Cari
              </button>

              {/* BUTTON RESET */}
              <button
                onClick={handleReset}
                className="
                h-[48px]
                border border-white/20
                hover:border-red-400
                hover:text-red-400
                transition
                rounded-xl
                font-semibold
                text-white
              "
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* ACCOUNT LIST */}
        <AccountList filters={activeFilters} />
      </div>
    </div>
  );
}
