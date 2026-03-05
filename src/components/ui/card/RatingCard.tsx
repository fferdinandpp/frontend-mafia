import { Rating } from "@/data/dummy/rating";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const RatingCard = ({ image, name, review, starCount }: Rating) => {
  const safeStarCount = Math.max(0, Math.min(5, starCount));

  return (
    <div className="bg-black border border-[#C2FF00] rounded-2xl px-5 py-3">
      <div className="flex items-center space-x-3">
        <Image
          src={image}
          alt={`Rating ${name}`}
          width={80}
          height={80}
          className=""
        />
        <div className="space-y-3 text-white">
          <h3>{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < safeStarCount ? "text-yellow-400" : "text-white"
                }
              />
            ))}
          </div>
          <h4>{review}</h4>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
