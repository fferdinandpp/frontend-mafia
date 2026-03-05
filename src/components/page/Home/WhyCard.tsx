import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

export const WhyCard = ({ image, title }: Props) => {
  return (
    <div className="space-y-7 flex flex-col items-center justify-center">
      <Image src={image} alt={title} width={120} height={120} />
      <div className="why-mafia-button px-5 py-2 text-white text-xl">
        <p>{title}</p>
      </div>
    </div>
  );
};
