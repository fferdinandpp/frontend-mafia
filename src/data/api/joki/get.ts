import { AxiosResponse } from "axios";
import { baseAxios } from "../base-url";
// import { jokiRankedPrice } from "@/data/dummy/rank-list";

export interface JokiProduct {
  id: number;
  name: string;
  img?: string;
  price: number;
  discount: string;
  discount_price: string;
  image?: string;
  reguler_price?: number;
  express_price?: number;
}

export interface CalculatedJoki {
  start_rank: string;
  start_star: string;
  end_rank: string;
  end_star: string;
  is_express: number;
  total_price: number;
  total_star?: number;
}
export interface GroupedJokiProduct {
  groupName: string;
  id: number;

  name: string;
  img?: string;
  image?: string;
  price: number;
  items: JokiProduct[];
  reguler_price?: number;
  discount: string;
  discount_price: string;
  express_price?: number;
}
export const getJokiProduct = async (type: string): Promise<JokiProduct[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: JokiProduct[];
      };
    }> = await baseAxios.get(`/joki/mobile-legends/${type}`);

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch username. Please try again later.");
  }
};

export const getCalculatedJokiPrice = async (
  type: string,
  start_rank_product_id: number,
  start_star: number,
  end_rank_product_id: number,
  end_star: number,
  is_express: number
): Promise<CalculatedJoki> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: CalculatedJoki;
    }> = await baseAxios.get(`/joki/mobile-legends${type}/calculate`, {
      params: {
        start_rank_product_id,
        start_star,
        end_rank_product_id,
        end_star,
        is_express,
      },
    });

    const calculateJockeyPrice: CalculatedJoki = response.data.data;
    return calculateJockeyPrice;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export interface JokiRankedPrice {
  Master: {
    reguler_price: number;
    express_price: number;
  };
  "Grand Master": {
    reguler_price: number;
    express_price: number;
  };
  Epic: {
    reguler_price: number;
    express_price: number;
  };
  Legends: {
    reguler_price: number;
    express_price: number;
  };
  "Mythic Grading": {
    reguler_price: number;
    express_price: number;
  };
  "Mythic Romawi": {
    reguler_price: number;
    express_price: number;
  };
  "Mythical Honor": {
    reguler_price: number;
    express_price: number;
  };
  "Mythical Glory": {
    reguler_price: number;
    express_price: number;
  };
  "Mythical Immortal": {
    reguler_price: number;
    express_price: number;
  };
}

type ApiRankedPrice = {
  [key in keyof typeof jokiRankedPrice]: {
    reguler_price: number;
    express_price: number;
  };
};
type RankPrice = {
  reguler_price: number;
  express_price: number;
  discount?: number;
  discount_price?: number;
};

export type JokiRankedPriceItem = {
  groupName: string;
  reguler_price?: number;
  express_price?: number;
  discount?: number;
  discount_price?: number | null;
  img: string;
};

export const getJokiRankedPrice = async (): Promise<JokiRankedPriceItem[]> => {
  try {
    const response = await baseAxios.get<{ data: Record<string, RankPrice> }>(
      `/joki/mobile-legends/price`
    );

    const apiData = response.data.data;

    return Object.entries(apiData).map(([rank, prices]) => ({
      groupName: rank,
      ...prices,
      img: jokiRankedPrice[rank as keyof typeof jokiRankedPrice]?.logo || "",
    }));
  } catch (error) {
    console.error("getJokiRankedPrice error:", error);
    throw new Error("Failed to fetch rank price.");
  }
};

export const jokiRankedPrice: Record<string, { logo: string }> = {
  Master: { logo: "/images/rank/master.png" },
  "Grand Master": { logo: "/images/rank/grandmaster.png" },
  Epic: { logo: "/images/rank/epic.png" },
  Legends: { logo: "/images/rank/legends.png" },
  "Mythic Grading": { logo: "/images/rank/grading.png" },
  "Mythic Romawi": { logo: "/images/rank/mythic.png" },
  "Mythical Honor": { logo: "/images/rank/honor.png" },
  "Mythical Glory": { logo: "/images/rank/glory.png" },
  "Mythical Immortal": { logo: "/images/rank/immo.png" },
};

// Tipe API gendong sesuai data yang kamu kasih
export type ApiGendongPrice = Record<keyof typeof jokiRankedPrice, number>;

// Tipe data yang kita kirim ke UI
export type JokiGendongPriceItem = {
  groupName: string;
  reguler_price: number;
  express_price: number;
  discount: number;
  discount_price: number | null;
  img: string;
};

export const getJokiGendongPrice = async (): Promise<
  JokiGendongPriceItem[]
> => {
  try {
    const response = await baseAxios.get<{ data: ApiGendongPrice }>(
      `/joki/mobile-legends/gendong/price`
    );

    const apiData = response.data.data;

    return Object.entries(apiData).map(([rank, price]) => ({
      groupName: rank,
      reguler_price: price,
      express_price: price, // sama karena API cuma kasih 1 price
      discount: 0,
      discount_price: null,
      img: jokiRankedPrice[rank as keyof typeof jokiRankedPrice]?.logo || "",
    }));
  } catch (err) {
    console.error("getJokiGendongPrice error:", err);
    throw new Error("Failed to fetch gendong price.");
  }
};
