export interface PromoItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  href?: string;
  badge?: string;
}

export const dummyPromos: PromoItem[] = [
  {
    id: 1,
    title: "Promo Akun Sultan Mingguan",
    subtitle: "Diskon s/d 20%",
    description: "Ambil akun pilihan hari ini sebelum sold out.",
    image: "/images/other/promo.webp",
    href: "/",
    badge: "HOT",
  },
  {
    id: 2,
    title: "Flash Sale FC Mobile",
    subtitle: "Harga miring",
    description: "Stok terbatas, cek list akun FC Mobile terbaru.",
    image: "/images/other/promo.webp",
    href: "/",
    badge: "FLASH",
  },
  {
    id: 3,
    title: "Promo eFootball Epic",
    subtitle: "Bonus potongan",
    description: "Cocok buat yang lagi hunting Epic/Legend.",
    image: "/images/other/promo.webp",
    href: "/",
  },
  {
    id: 4,
    title: "Promo Top Up & Joki",
    subtitle: "Paket hemat",
    description: "Bundle layanan biar lebih irit.",
    image: "/images/other/promo.webp",
    href: "/",
    badge: "BUNDLE",
  },
  {
    id: 5,
    title: "Promo Member Baru",
    subtitle: "Khusus first order",
    description: "Buat akun dulu, lalu klaim promo di checkout.",
    image: "/images/other/promo.webp",
    href: "/",
  },
];
