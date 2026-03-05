import axios, { AxiosResponse } from "axios";
import { CalculateJockeyRankedPrice } from "./types";
const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});
const getJockeyProduct = async () => {
  try {
    const response = await baseAxios.get(`/joki/mobile-legends/price`);

    return response.data;
  } catch (error) {
    console.error("Error fetching username:", error);
    throw new Error("Failed to fetch username. Please try again later.");
  }
};

const getImageUrl = (rank: string): string => {
  switch (rank) {
    case "Epic":
      return "https://i.ibb.co/2NGzHWp/epic.png";
    case "Legend":
      return "https://i.ibb.co/9NGZtps/legend.png";
    case "Mythic Grading":
      return "https://i.ibb.co/xSWgn9k/mythic.png";
    case "Mythic Romawi":
      return "https://i.ibb.co/xSWgn9k/mythic.png";
    case "Mythical Honor":
      return "https://i.ibb.co/McF2dYr/mythical-honor.png";
    case "Mythical Glory":
      return "https://i.ibb.co/c3HCYJ7/mythical-glory.png";
    case "Mythical Immortal":
      return "https://i.ibb.co/ftz0TMm/mythical-immortal.png";
    default:
      return "";
  }
};
export { getJockeyProduct, getImageUrl };

const getJockeyPrice = async () => {
  try {
    const response = await baseAxios.get(`/joki/mobile-legends`);

    return response.data;
  } catch (error) {
    console.error("Error fetching username:", error);
    throw new Error("Failed to fetch username. Please try again later.");
  }
};

export default getJockeyPrice;

export const calculateJockeyRankedPrice = async (
  start_rank_product_id: number,
  start_star: number,
  end_rank_product_id: number,
  end_star: number,
  is_express: number
): Promise<CalculateJockeyRankedPrice> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: CalculateJockeyRankedPrice;
    }> = await baseAxios.get("/joki/mobile-legends/calculate", {
      params: {
        start_rank_product_id,
        start_star,
        end_rank_product_id,
        end_star,
        is_express,
      },
    });

    const calculateJockeyPrice: CalculateJockeyRankedPrice = response.data.data;
    return calculateJockeyPrice;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
