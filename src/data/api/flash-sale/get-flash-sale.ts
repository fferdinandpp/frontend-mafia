import axios, { AxiosResponse } from "axios";
import { ProductFlashSale } from "./types";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

export const getFlashSale = async (): Promise<ProductFlashSale[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductFlashSale[];
      };
    }> = await baseAxios.get("/flash-sale");

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
