"use client";
import { panton } from "@/utils/font";
import React from "react";
import Marquee from "react-fast-marquee";

const RunningText = () => {
  const items = [
    "PROMO SETIAP HARI",
    "UPDATE WEBSITE MAFIASTORE.COM",
    "JUAL BELI AKUN EFOOTBALL & FC MOBILE",
  ];

  return (
    <div className="bg-running-text border-y-2 border-y-[#FFF200] py-3">
      <Marquee speed={45} gradient={false} pauseOnHover autoFill>
        <div className="flex items-center whitespace-nowrap">
          {items.map((text, idx) => (
            <React.Fragment key={text}>
              <span
                className={`mx-1 text-lg font-bold text-white ${panton.className}`}
              >
                {text}
              </span>
              {idx !== items.length - 1 && (
                <span className="mx-1 text-[#FFF200]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RunningText;
