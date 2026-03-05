import { AxiosResponse } from "axios";
import { baseAxios } from "../base-url";
import { ProductRating } from "./types";

export const getRating = async (): Promise<ProductRating[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductRating[];
      };
    }> = await baseAxios.get("/rating");

    return response.data.data.data;
  } catch (error) {
    console.error("🚀 ~ getRating ~ error:", error);
    throw new Error("Failed to fetch data");
  }
};
