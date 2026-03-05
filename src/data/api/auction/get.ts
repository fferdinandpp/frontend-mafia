import { baseAxios } from "@/utils/baseAxios";
import { AxiosResponse } from "axios";

export interface AuctionLeaderboard {
  id: number;
  reff_id: string;
  name: string;
  whatsapp_number: string;
  email: string;
  bid_amount: number;
  is_winner: number;
  payment_status: string;
  created_at: string;
}

export interface Page {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface LeaderboardResponse {
  data: AuctionLeaderboard[];
  page: Page;
}

export const getAuctionLeaderboard = async (
  code: string,
  page: number,
  limit: number
): Promise<LeaderboardResponse> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: AuctionLeaderboard[];
        page: Page;
      };
    }> = await baseAxios.get(
      `/auction/${code}/leaderboard?page=${page}&limit=${limit}`
    );

    return {
      data: response.data.data.data,
      page: response.data.data.page,
    };
  } catch (error: any) {
    throw new Error("Failed to fetch data: ", error);
  }
};

export interface AuctionAccountData {
  id: number;
  name: string;
  code: string;
  starting_price: number;
  min_bid: number;
  bid_increment: number;
  start_time: string;
  end_time: string;
  status: string;
  total_hero?: number;
  total_skin?: number;
  description?: string;
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
  created_at: string;
  link_wa?: string;
}

export const getAuctionAccountList = async (): Promise<
  AuctionAccountData[]
> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: AuctionAccountData[];
      };
    }> = await baseAxios.get(`/auction`);

    return response.data.data.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data: ", error);
  }
};

export const getAuctionAccountDetail = async (
  code: string
): Promise<AuctionAccountData> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: AuctionAccountData;
    }> = await baseAxios.get(`/auction/${code}/detail`);

    return response.data.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data: ", error);
  }
};
