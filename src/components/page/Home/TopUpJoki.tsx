"use client";
import React, { useState } from "react";
import PakuIcon from "@/icons/paku-icon.svg";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-square rounded-lg glass-card flex items-center justify-center mb-4">
    <Image
      src={src}
      alt={alt}
      width={150}
      height={150}
      className="rounded-lg"
    />
  </div>
);

const col1Items = [
  { src: "/images/game/ff.webp", alt: "Top Up Free Fire" },
  { src: "/images/game/ml.webp", alt: "Top Up Mobile Legends" },
  { src: "/images/game/pb.webp", alt: "Top Up Point Blank" },
];
const col2Items = [
  { src: "/images/game/ml.webp", alt: "Top Up Mobile Legends" },
  { src: "/images/game/pb.webp", alt: "Top Up Point Blank" },
  { src: "/images/game/ff.webp", alt: "Top Up Free Fire" },
];
const col3Items = [
  { src: "/images/game/pb.webp", alt: "Top Up Point Blank" },
  { src: "/images/game/ff.webp", alt: "Top Up Free Fire" },
  { src: "/images/game/ml.webp", alt: "Top Up Mobile Legends" },
];

const col1ItemsJoki = [
  { src: "/images/rank/epic.webp", alt: "Joki Rank Epic mafiastore" },
  { src: "/images/rank/glory.webp", alt: "Joki Rank Glory mafiastore" },
  { src: "/images/rank/honor.webp", alt: "Joki Rank Honor mafiastore" },
  { src: "/images/rank/elite.webp", alt: "Joki Rank Elite mafiastore" },
  { src: "/images/rank/grading.webp", alt: "Joki Rank Grading mafiastore" },
  { src: "/images/rank/immo.webp", alt: "Joki Rank Immo mafiastore" },
  { src: "/images/rank/legend.webp", alt: "Joki Rank Legend mafiastore" },
  { src: "/images/rank/master.webp", alt: "Joki Rank Master mafiastore" },
  { src: "/images/rank/mitik.webp", alt: "Joki Rank Mythic mafiastore" },
];
const col2ItemsJoki = [
  { src: "/images/rank/grading.webp", alt: "Joki Rank Grading mafiastore" },
  { src: "/images/rank/immo.webp", alt: "Joki Rank Immo mafiastore" },
  { src: "/images/rank/legend.webp", alt: "Joki Rank Legend mafiastore" },
  { src: "/images/rank/master.webp", alt: "Joki Rank Master mafiastore" },
  { src: "/images/rank/mitik.webp", alt: "Joki Rank Mythic mafiastore" },
  { src: "/images/rank/epic.webp", alt: "Joki Rank Epic mafiastore" },
  { src: "/images/rank/glory.webp", alt: "Joki Rank Glory mafiastore" },
  { src: "/images/rank/honor.webp", alt: "Joki Rank Honor mafiastore" },
  { src: "/images/rank/elite.webp", alt: "Joki Rank Elite mafiastore" },
];
const col3ItemsJoki = [
  { src: "/images/rank/legend.webp", alt: "Joki Rank Legend mafiastore" },
  { src: "/images/rank/master.webp", alt: "Joki Rank Master mafiastore" },
  { src: "/images/rank/mitik.webp", alt: "Joki Rank Mythic mafiastore" },
  { src: "/images/rank/epic.webp", alt: "Joki Rank Epic mafiastore" },
  { src: "/images/rank/grading.webp", alt: "Joki Rank Grading mafiastore" },
  { src: "/images/rank/immo.webp", alt: "Joki Rank Immo mafiastore" },
  { src: "/images/rank/glory.webp", alt: "Joki Rank Glory mafiastore" },
  { src: "/images/rank/honor.webp", alt: "Joki Rank Honor mafiastore" },
  { src: "/images/rank/elite.webp", alt: "Joki Rank Elite mafiastore" },
];

const GameGridPlaceholder = () => {
  const renderColumn = (items: any, animationClass: any) => (
    <div className="w-1/3">
      <div className={animationClass}>
        {[...items, ...items].map((item, index) => (
          <GameCard key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );

  return (
    <Link
      href={"https://www.mafiastore.id/id-id"}
      target="_blank"
      className="flex gap-4 p-4 bg-[url('/images/background/bg-mengkilat.webp')] 
                 bg-cover bg-center text-white 
                 h-[400px] overflow-hidden"
    >
      {renderColumn(col1Items, "animate-scroll-down")}
      {renderColumn(col2Items, "animate-scroll-up")}
      {renderColumn(col3Items, "animate-scroll-down")}
    </Link>
  );
};

const JokiGridPlaceholder = () => {
  const renderColumn = (items: any, animationClass: any) => (
    <Link
      href={"https://api.whatsapp.com/send?phone=6289682085102"}
      target="_blank"
      className="w-1/3"
    >
      <div className={animationClass}>
        {[...items, ...items].map((item, index) => (
          <GameCard key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </Link>
  );

  return (
    <div
      className="flex gap-4 p-4 bg-[url('/images/background/bg-mengkilat.webp')] 
                 bg-cover bg-center text-white 
                 h-[400px] overflow-hidden"
    >
      {renderColumn(col1ItemsJoki, "animate-scroll-down")}
      {renderColumn(col2ItemsJoki, "animate-scroll-up")}
      {renderColumn(col3ItemsJoki, "animate-scroll-down")}
    </div>
  );
};

export default function TopUpJoki() {
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [isJokiOpen, setIsJokiOpen] = useState(false);

  return (
    <div className="w-11/12 xl:w-7xl mx-auto my-10">
      <div className="flex flex-col xl:flex-row items-center justify-between space-y-5 xl:space-y-0 xl:space-x-3">
        <div className="flex flex-col w-full items-center">
          <div
            onMouseEnter={() => setIsTopUpOpen(!isTopUpOpen)}
            onMouseLeave={() => setIsTopUpOpen(!isTopUpOpen)}
            onClick={() => setIsTopUpOpen(!isTopUpOpen)}
            className="colored-box relative w-full cursor-pointer text-white font-bold text-2xl text-center py-2 rounded-t-2xl"
          >
            <PakuIcon className="absolute left-5 top-3.5" />
            <h3>TOP UP ALL GAME</h3>
            <PakuIcon className="absolute right-5 top-3.5" />
          </div>

          <div
            className={`collapsible-content w-full ${
              isTopUpOpen ? "open" : "closed"
            }`}
          >
            <div className=" w-full">
              <div className="w-[320px] xl:w-[600px] mx-auto">
                <GameGridPlaceholder />
              </div>
            </div>
          </div>

          <div className="colored-box relative w-full text-white font-bold text-xl xl:text-2xl text-center py-2 rounded-b-2xl">
            <PakuIcon className="absolute left-5 top-3.5" />
            <Link
              href="https://www.mafiastore.id/id-id?utm_source=tiktok"
              target="_blank"
            >
              TOP UP ALL GAME
            </Link>
            <PakuIcon className="absolute right-5 top-3.5" />
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <div
            onMouseEnter={() => setIsJokiOpen(!isJokiOpen)}
            onMouseLeave={() => setIsJokiOpen(!isJokiOpen)}
            onClick={() => setIsJokiOpen(!isJokiOpen)}
            className="colored-box relative w-full cursor-pointer text-white font-bold text-2xl text-center py-2 rounded-t-2xl"
          >
            <PakuIcon className="absolute left-5 top-3.5" />
            <h3>JOKI CEPAT HEMAT</h3>
            <PakuIcon className="absolute right-5 top-3.5" />
          </div>

          <div
            className={`collapsible-content w-full ${
              isJokiOpen ? "open" : "closed"
            }`}
          >
            <div className=" w-full">
              <div className="w-[320px] xl:w-[600px] mx-auto">
                <JokiGridPlaceholder />
              </div>
            </div>
          </div>

          <div className="colored-box relative w-full text-white font-bold text-xl xl:text-2xl text-center py-2 rounded-b-2xl">
            <PakuIcon className="absolute left-5 top-3.5" />
            <Link
              href="https://api.whatsapp.com/send?phone=6289682085102"
              target="_blank"
            >
              JOKI CEPAT HEMAT
            </Link>
            <PakuIcon className="absolute right-5 top-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
