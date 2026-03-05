export interface Payment {
  id: number;
  name: string;
  title?: string;
  tax: number;
  logo: string;
  type: string;
}
export const payment: Payment[] = [
  {
    id: 1,
    name: "qris",
    tax: 0.007,
    type: "percentage",
    logo: "/images/payment/qris copy.png",
  },
  // {
  //   id: 2,
  //   name: "permata",
  //   title: "PERMATA BANK",
  //   tax: 4000,
  //   type: "flat",

  //   logo: "/images/payment/logopermata.png",
  // },
  // {
  //   id: 3,
  //   name: "bni",
  //   title: "BANK BNI",
  //   tax: 4000,
  //   type: "flat",

  //   logo: "/images/payment/logobni.png",
  // },
  // {
  //   id: 4,
  //   name: "bri",
  //   title: "BANK BRI",
  //   tax: 4000,
  //   type: "flat",

  //   logo: "/images/payment/logobri.svg",
  // },
];
