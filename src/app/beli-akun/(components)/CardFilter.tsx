import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardFilter = ({ children }: Props) => {
  return (
    <div
      className={`
        rounded-xl
        border 
        border-white
        shadow-[0_0_10px_0_rgba(0,0,0,0.25)]
        backdrop-blur-[20px]
      `}
    >
      <div className="px-5 py-3">{children}</div>
      <style jsx>{`
        div {
          border-radius: 20px;
          background: linear-gradient(
              0deg,
              rgba(29, 29, 29, 0.4) 0%,
              rgba(29, 29, 29, 0.4) 100%
            ),
            #2f69fe;
          background-blend-mode: color-burn, normal;
        }
      `}</style>
    </div>
  );
};

export default CardFilter;
