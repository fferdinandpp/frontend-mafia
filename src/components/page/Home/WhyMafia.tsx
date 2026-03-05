import { whyMafia } from "@/data/dummy/whyMafia";
import { quantify } from "@/utils/font";
import React from "react";
import { WhyCard } from "./WhyCard";
import Image from "next/image";

export default function WhyMafia() {
  return (
    <div className="my-10 relative max-w-7xl mx-auto">
      <Image
        alt="MAFIASTORE"
        src="/images/other/ballondor.webp"
        width={250}
        height={250}
        className="absolute blur-xs -right-25 -top-20 z-10"
      />

      <div className="absolute bg-[#7b01fe] blur-3xl w-[200px] h-[200px] rounded-full -right-30 -top-14 z-0" />

      <h2
        className={`text-center text-5xl text-white uppercase ${quantify.className}`}
      >
        Mengapa Harus <span className="text-[#FE2FFB]">mafiastore?</span>
      </h2>

      <div className="flex space-x-8 items-center justify-center mt-14">
        {whyMafia.map((item, index) => (
          <WhyCard key={index} image={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
}
