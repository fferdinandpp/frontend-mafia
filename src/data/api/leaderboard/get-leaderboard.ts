import { baseAxios } from "../base-url";
import { ProductLeaderboard } from "./types";
import { AxiosResponse } from "axios";

export const getLeaderboard = async (): Promise<ProductLeaderboard> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: ProductLeaderboard;
    }> = await baseAxios.get("/leaderboard");

    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
