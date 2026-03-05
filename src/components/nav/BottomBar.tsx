"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeIcon from "@/icons/home-icon.svg";
import JualAkun from "@/icons/jual-akun-icon.svg";
import BeliAkun from "@/icons/beli-akun-icon.svg";
import TopUpIcon from "@/icons/topup-icon.svg";
import JokIcon from "@/icons/joki-icon.svg";
import CsIcon from "@/icons/cs-icon.svg";
import RiwayatIcon from "@/icons/riwayat-icon.svg";

export default function BottomBar() {
  const pathname = usePathname();
  return (
    <div className="sm:hidden inline fixed bottom-0 bg-[#0A3DAB] py-2 w-full z-20 shadow-2xl text-white">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center w-full justify-between">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <HomeIcon size={30} />
            <h3 className="text-xs">Beranda</h3>
          </Link>
          <Link
            href="/beli-akun"
            className={`flex flex-col items-center space-y-1`}
          >
            <BeliAkun size={30} />
            <h3 className="text-xs">Beli Akun</h3>
          </Link>
          <Link
            href="https://www.mafiastore.id/id-id?utm_source=tiktok"
            className={`flex flex-col items-center space-y-1`}
          >
            <TopUpIcon size={30} />
            <h3 className="text-xs">Top Up</h3>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=6289682085102"
            className={`flex flex-col items-center space-y-1`}
          >
            <JokIcon size={30} />
            <h3 className="text-xs">Joki MLBB</h3>
          </Link>
          <Link
            target="_blank"
            href="https://linktr.ee/"
            className={`flex flex-col items-center space-y-1`}
          >
            <BeliAkun size={30} />
            <h3 className="text-xs">Jual Akun</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
