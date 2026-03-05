"use client";

import RatingCard from "@/components/ui/card/RatingCard";
import { dummyRatings } from "@/data/dummy/rating";
import { quantify } from "@/utils/font";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Rating() {
  const [isPaused, setIsPaused] = useState(false);

  const [topRow, bottomRow] = useMemo(() => {
    const top = dummyRatings.filter((_, index) => index % 2 === 0);
    const bottom = dummyRatings.filter((_, index) => index % 2 === 1);

    return [
      top.length ? top : dummyRatings,
      bottom.length ? bottom : dummyRatings,
    ];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-10 mb-20 relative max-w-[1440px] mx-auto">
      <Image
        alt="MAFIASTORE"
        src="/images/other/ballfull.webp"
        width={300}
        height={300}
        className="absolute  -right-40 -top-24  z-0 blur-xs drop-shadow-2xl "
      />
      <h2 className={`text-5xl ${quantify.className} text-[#C2FF00]`}>
        TESTIMONI PELANGGAN KAMI
      </h2>
      <div
        className="w-full overflow-hidden space-y-4 mt-6 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Marquee direction="left" speed={35} play={!isPaused} gradient={false}>
          {topRow.concat(topRow).map((rating, index) => (
            <div className="mx-2" key={`${rating.id}-top-${index}`}>
              <RatingCard
                id={rating.id}
                image={rating.image}
                name={rating.name}
                review={rating.review}
                starCount={rating.starCount}
              />
            </div>
          ))}
        </Marquee>

        <Marquee direction="right" speed={35} play={!isPaused} gradient={false}>
          {bottomRow.concat(bottomRow).map((rating, index) => (
            <div className="mx-2" key={`${rating.id}-bottom-${index}`}>
              <RatingCard
                id={rating.id}
                image={rating.image}
                name={rating.name}
                review={rating.review}
                starCount={rating.starCount}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
