export interface ProductJockeyCarryPrice {
  id: number;
  name: string;
  img: string;
  price: number;
}

export interface ProductJockeyCarryList {
  Master: number;
  "Grand Master": number;
  Epic: number;
  Legends: number;
  "Mythic Grading": number;
  "Mythic Romawi": number;
  "Mythical Honor": number;
  "Mythical Glory": number;
  "Mythical Immortal": number;
}

export interface CalculateJockeyCarryPrice {
  start_rank: string;
  start_star: string;
  end_rank: string;
  end_star: string;
  total_price: number;
}
