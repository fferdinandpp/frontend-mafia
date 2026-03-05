"use client";
import { panton, quantify } from "@/utils/font";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import HomeIcon from "@/icons/home-icon.svg";
import JualAkun from "@/icons/jual-akun-icon.svg";
import BeliAkun from "@/icons/beli-akun-icon.svg";
import TopUpIcon from "@/icons/topup-icon.svg";
import JokIcon from "@/icons/joki-icon.svg";
import CsIcon from "@/icons/cs-icon.svg";
import RiwayatIcon from "@/icons/riwayat-icon.svg";
import RunningText from "../animation/RunningText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FindAccount from "./FindAccount";

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="sticky top-0  z-40 hidden md:block">
        <div className="w-full py-4 bg-navbar">
          <div className="w-11/12 xl:w-6xl mx-auto">
            <div className="flex items-center w-full justify-between space-x-2 font-semibold text-white">
              <div className="flex items-center space-x-2">
                <Image
                  alt="MAFIASTORE Logo"
                  src={"/images/logo/mafiastorelogo.webp"}
                  width={35}
                  height={35}
                />
                <h2 className={`text-2xl ${quantify.className}`}>MAFIASTORE</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href={"/"}
                  className={`${
                    pathname === "/" && "active-nav"
                  } flex items-center space-x-2 px-3 xl:px-5 py-2 rounded-2xl text-base xl:text-lg`}
                >
                  {pathname === "/" && <HomeIcon size={30} />}
                  <h3>Beranda</h3>
                </Link>
                <Link
                  href="/beli-akun"
                  className={`${
                    pathname === "/beli-akun" && "active-nav"
                  } flex items-center space-x-2 px-3 xl:px-5 py-2 rounded-2xl text-base xl:text-lg`}
                >
                  {pathname === "/beli-akun" && <BeliAkun size={30} />}
                  <h3>Beli Akun</h3>
                </Link>

                <Link
                  href="https://linktr.ee/"
                  target="_blank"
                  className={`${
                    pathname === "/jual-akun" && "active-nav"
                  } flex items-center space-x-2 px-3 xl:px-5 py-2 rounded-2xl text-base xl:text-lg`}
                >
                  {pathname === "/jual-akun" && <JualAkun />}
                  <h3>Jual Akun</h3>
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?phone=6289682143675"
                  target="_blank"
                  className={`${
                    pathname === "/customer-service" && "active-nav"
                  } flex items-center space-x-2 px-3 xl:px-5 py-2 rounded-2xl text-base xl:text-lg`}
                >
                  {pathname === "/customer-service" && <CsIcon />}
                  <h3>Customer Service</h3>
                </Link>
              </div>

              <input
                className="active-nav font-medium w-1/4 py-2 px-4"
                placeholder="Mau cari akun apa?"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-[#0A3DAB] sticky top-0 z-40">
        <div className="flex items-center justify-between w-11/12 space-x-5 mx-auto py-5">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={"/images/logo/mafiastorelogo.webp"}
              width={50}
              height={50}
              alt="Logo MAFIASTORE"
            />
          </Link>
          <div className="w-full flex  items-center px-4 py-3 rounded-xl backdrop-blur-[20px] bg-[#1D1D1D]/20 bg-blend-color-burn shadow-[3px_3px_0.5px_-3.5px_rgba(255,255,255,0.50)_inset,2px_2px_1px_-2px_#B3B3B3_inset,-2px_-2px_1px_-2px_#B3B3B3_inset,0_0_22px_0_rgba(242,242,242,0.50)_inset]">
            <IoSearch color="white" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Mau cari akun apa?"
              className="w-full h-full p-0 bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-white placeholder:text-gray-300"
            />
          </div>
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <IoMenu size={30} color="white" />
          </button>
        </div>

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 z-40"
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-80 bg-[#0A3DAB] z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/30">
            <div className="flex items-center space-x-3">
              <Image
                src={"/images/logo/mafiastorelogo.webp"}
                width={50}
                height={50}
                alt="Logo MAFIASTORE"
              />
              <h2
                className={`${panton.className} font-bold text-white text-2xl`}
              >
                MAFIASTORE
              </h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <IoClose size={28} color="white" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4 text-white font-semibold text-lg">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/" && <HomeIcon size={30} />}

                <span>Beranda</span>
              </div>
            </Link>
            <Link
              href="/beli-akun"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/beli-akun"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/beli-akun" && <BeliAkun size={30} />}

                <span>Beli Akun</span>
              </div>
            </Link>
            <Link
              href="https://www.mafiastore.id/id-id?utm_source=tiktok"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/top-up"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/top-up" && <TopUpIcon />}
                <span>Top Up</span>
              </div>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=6289682085102"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/joki"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/joki" && <JokIcon />}
                <span>Joki</span>
              </div>
            </Link>
            <Link
              href="https://linktr.ee/"
              target="_blank"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/jual-akun"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/jual-akun" && <JualAkun />}
                <span>Jual Akun</span>
              </div>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=6289682143675"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/customer-service"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/customer-service" && <CsIcon />}
                <span>Customer Service</span>
              </div>
            </Link>
            <Link
              href="/riwayat"
              onClick={() => setSidebarOpen(false)}
              className={
                pathname === "/riwayat"
                  ? "active-nav px-3 py-2 rounded"
                  : "px-3 py-2 rounded hover:bg-white/20 transition"
              }
            >
              <div className="flex items-center space-x-2">
                {pathname === "/riwayat" && <RiwayatIcon />}
                <span>Riwayat</span>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Link
                href={"https://www.mafiastore.id/id-id/sign-in"}
                target="_blank"
                className="active-nav w-fit px-4 py-2 rounded-lg  text-white font-semibold xl:text-base text-sm"
              >
                Login
              </Link>
              <Link
                href={"https://www.mafiastore.id/id-id/sign-up"}
                target="_blank"
                className="glass-card w-fit px-4 py-2 rounded-lg  text-white font-semibold xl:text-base text-sm"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
        <RunningText />
      </div>

      <FindAccount search={search} setSearch={setSearch} />
    </>
  );
}
