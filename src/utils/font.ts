import localFont from "next/font/local";
import { Amarante, Plus_Jakarta_Sans, Poppins } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const amarante = Amarante({
  subsets: ["latin"],
  weight: ["400"],
});

export const utendo = localFont({
  src: [
    {
      path: "../../public/fonts/utendo/Utendo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/utendo/Utendo-Semibold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/utendo/Utendo-ExtraBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/utendo/Utendo-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  display: "swap",
  variable: "--font-utendo",
});

export const panton = localFont({
  src: [
    {
      path: "../../public/fonts/panton/Panton-Trial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/panton/Panton-Trial-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/panton/Panton-Trial-ExtraBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/panton/Panton-Trial-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  display: "swap",
  variable: "--font-utendo",
});

export const quub = localFont({
  src: [
    {
      path: "../../public/fonts/quub/QUUB/QUUB Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/quub/QUUB/QUUB Medium.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/quub/QUUB/QUUB Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/quub/QUUB/QUUB Black.ttf",
      weight: "800",
      style: "black",
    },
  ],
  display: "swap",
  variable: "--font-utendo",
});

export const halloweenHorrors = localFont({
  src: [
    {
      path: "../../public/fonts/halloween_horrors/Halloween Horrors.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/halloween_horrors/Halloween Horrors.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/halloween_horrors/Halloween Horrors.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/halloween_horrors/Halloween Horrors.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  display: "swap",
  variable: "--font-utendo",
});

export const supercharge = localFont({
  src: [
    {
      path: "../../public/fonts/supercharge/supercharge.ttf",
      weight: "800",
      style: "bold",
    },
  ],
});

export const designer = localFont({
  src: [
    {
      path: "../../public/fonts/designer/Designer.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const quantify = localFont({
  src: [
    {
      path: "../../public/fonts/quantify/Quantify.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const harabaraMaisDemo = localFont({
  src: [
    {
      path: "../../public/fonts/harabara_mais_demo/Harabara Mais Demo.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
