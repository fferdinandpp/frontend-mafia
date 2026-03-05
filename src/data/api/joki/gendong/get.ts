import { AxiosResponse } from "axios";
import {
  CalculateJockeyCarryPrice,
  ProductJockeyCarryList,
  ProductJockeyCarryPrice,
} from "./types";
import { baseAxios } from "../../base-url";

export const getJockeyCarryPrice = async (): Promise<
  ProductJockeyCarryPrice[]
> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductJockeyCarryPrice[];
      };
    }> = await baseAxios.get("/joki/mobile-legends");

    const jockeyCarryPrice: ProductJockeyCarryPrice[] = response.data.data.data;
    const jockeyCarry: ProductJockeyCarryPrice[] = jockeyCarryPrice.map(
      (jockey) => ({
        id: jockey.id,
        name: jockey.name,
        img: jockey.img,
        price: jockey.price,
      })
    );

    return jockeyCarry;
  } catch (error) {
    throw new Error("Failed to fetch daata");
  }
};

export const getJokiGendongPrice =
  async (): Promise<ProductJockeyCarryList> => {
    try {
      const response: AxiosResponse<{
        message: string;
        data: ProductJockeyCarryList;
      }> = await baseAxios.get("/joki/mobile-legends/gendong/price");

      const jockeyCarryList: ProductJockeyCarryList = response.data.data;
      return jockeyCarryList;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

export const calculateJockeyPrice = async (
  start_rank_product_id: number,
  start_star: number,
  end_rank_product_id: number,
  end_star: number
): Promise<CalculateJockeyCarryPrice> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: CalculateJockeyCarryPrice;
    }> = await baseAxios.get("/joki/mobile-legends/gendong/calculate", {
      params: {
        start_rank_product_id,
        start_star,
        end_rank_product_id,
        end_star,
      },
    });

    const calculateJockeyPrice: CalculateJockeyCarryPrice = response.data.data;
    return calculateJockeyPrice;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
