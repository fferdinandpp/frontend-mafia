"use client";

import { amarante, quantify } from "@/utils/font";
import React from "react";

type Props = {
  variant: "blue" | "yellow";
  title: string;
  onClick: () => void;
};

const PrimaryButton = ({ variant, onClick, title }: Props) => {
  const getVariantColor = (val: Props["variant"]) => {
    switch (val) {
      case "blue":
        return "#0095FF";
      case "yellow":
        return "#FFC300";
      default:
        return "#0095FF";
    }
  };

  const borderColor = getVariantColor(variant);
  return (
    <div className="flex items-center">
      <p className={`text-white text-5xl ${amarante.className} rotate-90`}>
        {" "}
        {">>>"}{" "}
      </p>
      <button
        onClick={onClick}
        style={{ borderColor }}
        className={`bg-button p-3 min-w-85 text-white text-5xl ${quantify.className} border rounded-xl`}
      >
        {title}
      </button>
      <p className={`text-white text-5xl ${amarante.className} rotate-90`}>
        {" "}
        {">>>"}{" "}
      </p>
    </div>
  );
};

export default PrimaryButton;
