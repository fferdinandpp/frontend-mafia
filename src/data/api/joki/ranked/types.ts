export type RankName =
  | "Master"
  | "Grand Master"
  | "Epic"
  | "Legends"
  | "Mythic Grading"
  | "Mythic Romawi"
  | "Mythical Honor"
  | "Mythical Glory"
  | "Mythical Immortal";

export interface JockeyPrice {
  reguler_price: number;
  express_price: number;
}

export interface JockeyPriceList {
  message: string;
  data: Record<RankName, JockeyPrice>;
}

export interface CalculateJockeyRankedPrice {
  start_rank: string;
  start_star: string;
  end_rank: string;
  end_star: string;
  is_express: number;
  total_price: number;
}

export interface ProductJockeyRanked {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
  discount_price: string;
}
