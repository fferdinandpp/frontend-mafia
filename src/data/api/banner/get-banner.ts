import axios, { AxiosResponse } from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

import { ProductBanner } from "./types";

export const getBanner = async (): Promise<ProductBanner[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductBanner[];
      };
    }> = await baseAxios.get("/banner", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data.data.data;
  } catch (error) {
    console.error("🚀 ~ error fetching data ~ error:", error);
    throw new Error("Failed to fetch data");
  }
};
