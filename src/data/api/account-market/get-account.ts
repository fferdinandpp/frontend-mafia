import { AxiosResponse } from "axios";
import { baseAxios } from "../base-url";
import { Image } from "./types";

export type TAccountFilters = {
  page?: number;
  search?: string;
  limit?: number;
  min_price?: number;
  max_price?: number;
  min_hero_count?: number;
  min_skin_count?: number;
  highest_rank?: string;
  collector_type?: string;
  current_rank?: string;
  game?: string;
};

export interface ProductAccountMarket {
  id: number;
  name: string;
  code: string;
  price: number;
  discount: string;
  collector_type: string;
  status: string;
  images: Image[];
  thumbnail: string | null;
  detail_images: Image[];
  created_at: string;
  discount_price: number;
}

export interface Page {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface ProductAccountMarketResponse {
  data: ProductAccountMarket[];
  page: Page;
}

export const getAccount = async (
  params: TAccountFilters
): Promise<ProductAccountMarketResponse> => {
  try {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, String(value));
      }
    });

    const url = `/account?${queryParams.toString()}`;

    console.log("API CALL:", url);

    type ApiFullResponse = {
      message: string;
      data: ProductAccountMarketResponse;
    };

    const response: AxiosResponse<ApiFullResponse> =
      await baseAxios.get(url);

    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch accounts:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getAccountPage = async (page?: number): Promise<Page> => {
  try {
    type ApiFullResponse = {
      message: string;
      data: ProductAccountMarketResponse;
    };

    const response: AxiosResponse<ApiFullResponse> =
      await baseAxios.get(`/account?page=${page ?? 1}`);

    return response.data.data.page;
  } catch (error) {
    console.error("Failed to fetch page:", error);
    throw new Error("Failed to fetch data");
  }
};