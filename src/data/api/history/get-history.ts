import { AxiosResponse } from "axios";
import { ProductHistory } from "./types";
import { baseAxios } from "../base-url";

export const getHistory = async (search: string): Promise<ProductHistory[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductHistory[];
      };
    }> = await baseAxios.get("/top-up/mobile-legends/track", {
      params: {
        search,
      },
    });

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getRiwayat = async (
  search: string = ""
): Promise<ProductHistory> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductHistory;
      };
    }> = await baseAxios.get("/top-up/mobile-legends/track", {
      params: {
        search,
      },
    });

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
