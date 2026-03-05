"use client";

import { useGetDataMaster } from "@/hooks/useDataMaster";
import { harabaraMaisDemo, quantify } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";

export default function Footer() {
  const { data } = useGetDataMaster();

  const dataCs =
    data?.filter(
      (item) => item.type === "whatsapp" || item.type === "telegram",
    ) || [];

  const dataSocmed =
    data?.filter(
      (item) =>
        item.type !== "whatsapp" &&
        item.type !== "telegram" &&
        isNaN(Number(item.value)),
    ) || [];

  return (
    <footer
      className={`footer-bg relative w-full text-white ${harabaraMaisDemo.className}`}
    >
      {/* Ornament kanan */}
      <div className="absolute right-0 top-0 rotate-180">
        <Image
          src="/images/other/banner-kiri.webp"
          alt="Ornament"
          width={180}
          height={180}
        />
      </div>

      {/* Ornament kiri */}
      <div className="absolute left-0 top-0 rotate-180">
        <Image
          src="/images/other/banner-kanan.webp"
          alt="Ornament"
          width={180}
          height={180}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image
            src="/images/logo/mafiastorelogo.webp"
            alt="MAFIASTORE"
            width={60}
            height={60}
          />

          <h2
            className={`text-4xl md:text-5xl font-bold ${quantify.className}`}
          >
            MAFIASTORE
          </h2>
        </div>

        {/* Deskripsi */}
        <p className="text-base md:text-lg max-w-[1000px] mb-6 leading-relaxed">
          MAFIASTORE adalah website jual beli akun game paling terpercaya dan
          kredibel di Indonesia & Malaysia.
        </p>

        {/* GRID FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10">
          {/* PETA SITUS */}
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-lg mb-5">Peta Situs</h4>

            <Link href="#">Jual Akun</Link>
            <Link href="/beli-akun">Beli Akun</Link>
            <Link href="/riwayat">Lacak Transaksi</Link>
          </div>

          {/* LEGALITAS */}
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold text-lg mb-5">Legalitas</h4>

            <Link href="#">Kebijakan Pribadi</Link>
            <Link href="#">Syarat & Ketentuan</Link>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg">Customer Service</h4>

            {dataCs.map((item) => (
              <Link
                key={item.id}
                href={
                  !isNaN(Number(item.value))
                    ? `https://wa.me/${item.value}`
                    : item.value
                }
                target="_blank"
                className="flex items-center gap-3"
              >
                {item.type === "whatsapp" ? (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <FaWhatsapp />
                  </div>
                ) : (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <FaTelegramPlane />
                  </div>
                )}

                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg">Social Media Resmi</h4>

            {dataSocmed.map((item) => (
              <Link
                key={item.id}
                href={item.value}
                target="_blank"
                className="flex items-center gap-3"
              >
                {item.value.includes("linktr") ? (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <PiLinktreeLogoBold />
                  </div>
                ) : item.value.includes("instagram") ? (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <FaInstagram />
                  </div>
                ) : item.value.includes("tiktok") ? (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <FaTiktok />
                  </div>
                ) : (
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-lg">
                    <FaYoutube />
                  </div>
                )}

                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-5 text-sm">
          Copyright @ 2025 MAFIA All rights reserved. Powered by MAFIASTORE
        </div>
      </div>
    </footer>
  );
}
