export interface Rating {
  id: number;
  image: string;
  name: string;
  review: string;
  starCount: number;
}

export const dummyRatings: Rating[] = [
  {
    id: 1,
    image: "/images/other/image.webp",
    name: "Rizky",
    review: "Admin fast respon, akun aman dan sesuai deskripsi.",
    starCount: 5,
  },
  {
    id: 2,
    image: "/images/other/image.webp",
    name: "Nadia",
    review: "Prosesnya cepet, recommended buat yang mau beli akun.",
    starCount: 5,
  },
  {
    id: 3,
    image: "/images/other/image.webp",
    name: "Fajar",
    review: "Harga oke, pengiriman lancar. Next order lagi.",
    starCount: 4,
  },
  {
    id: 4,
    image: "/images/other/image.webp",
    name: "Salsa",
    review: "Trusted, dibantu sampai selesai. Mantap!",
    starCount: 5,
  },
  {
    id: 5,
    image: "/images/other/image.webp",
    name: "Dimas",
    review: "Overall puas, cuma sempet nunggu bentar pas jam rame.",
    starCount: 4,
  },
];
