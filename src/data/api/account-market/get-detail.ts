import axios, { AxiosResponse } from "axios";
import { baseAxios } from "../base-url";

export interface AccountDetail {
  id: number;
  name: string;
  code: string;
  discount: string;
  selling_price: number;
  current_rank: null;
  current_star: null;
  highest_rank: null;
  highest_star: null;
  level: null;
  total_hero: number;
  total_skin: 416;
  all_season_winrate: null;
  description: string;
  collector_type: string;
  status: string;
  view_count: number;
  images: [
    {
      id: number;
      image: string;
    },
    {
      id: number;
      image: string;
    }
  ];
  heroes_and_skins: [];
  created_at: string;
  link_wa?: string;
  link_tele?: string;
  discount_price: string;
}

const getDetailAccount = async (code?: string): Promise<AccountDetail> => {
  try {
    const response: AxiosResponse<{
      message: string;

      data: AccountDetail;
    }> = await baseAxios.get(`/account/${code}/detail`);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching username:", error);
    throw new Error("Failed to fetch username. Please try again later.");
  }
};

export default getDetailAccount;
