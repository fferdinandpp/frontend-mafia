"use client";

import React, { useState, useRef, useEffect } from "react";
import AccountList from "./AccountList";
import { TAccountFilters } from "@/data/api/account-market/get-account";
import { harabaraMaisDemo } from "@/utils/font";
import { FaChevronDown } from "react-icons/fa";

const gameOptions = [
  {
    label: "Semua",
    value: "",
    icon: "/images/logo/mafiastorelogo.webp",
  },
  {
    label: "Efootball",
    value: "efootball",
    icon: "/images/logo/efootball.webp",
  },
  {
    label: "FC Mobile",
    value: "fc-mobile",
    icon: "/images/logo/fcmobile.webp",
  },
];

export default function BeliAkunPage() {
  const [game, setGame] = useState<string>("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [openGame, setOpenGame] = useState(false);

  const [activeFilters, setActiveFilters] = useState<
    Omit<TAccountFilters, "page" | "limit">
  >({});

  const selectedGame =
    gameOptions.find((g) => g.value === game) || gameOptions[0];

  /* =============================
     CLOSE DROPDOWN SAAT KLIK LUAR
  ============================== */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenGame(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =============================
     FORMAT RUPIAH
  ============================== */

  const formatRupiah = (value: string) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(Number(number));
  };

  const handlePriceInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (v: string) => void,
    ref: React.RefObject<HTMLInputElement | null>,
  ) => {
    const input = e.target;

    const raw = input.value.replace(/\D/g, "");
    const formatted = raw ? formatRupiah(raw) : "";

    const cursor = input.selectionStart ?? 0;

    setter(formatted);

    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.selectionStart = cursor;
        ref.current.selectionEnd = cursor;
      }
    });
  };

  /* =============================
     SEARCH
  ============================== */

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
            bg-[url('/images/background/bgFaq.webp')]
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
              <div className="flex flex-col relative" ref={dropdownRef}>
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

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openGame ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                  absolute top-full left-0 w-full
                  overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${
                    openGame ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }
                `}
                >
                  <div className="bg-[#1b2030] rounded-xl border-2 border-blue-500 shadow-xl">
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
                        transition text-white
                      "
                      >
                        <img src={item.icon} className="w-5 h-5" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HARGA MIN */}
              <div className="flex flex-col">
                <label className="text-lg text-gray-300 mb-1">
                  Harga Minimal
                </label>

                <input
                  ref={minRef}
                  value={minPrice}
                  onChange={(e) => handlePriceInput(e, setMinPrice, minRef)}
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
                  ref={maxRef}
                  value={maxPrice}
                  onChange={(e) => handlePriceInput(e, setMaxPrice, maxRef)}
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
                border-2 border-white
                hover:border-[#E00000]
                hover:text-[#E00000]
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
