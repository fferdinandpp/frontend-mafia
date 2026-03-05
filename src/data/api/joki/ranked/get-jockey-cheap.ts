import { baseAxios } from "../../base-url";
import { AxiosResponse } from "axios";
import { ProductJockeyRanked } from "./types";

export const getJokiMurah = async (): Promise<ProductJockeyRanked[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductJockeyRanked[];
      };
    }> = await baseAxios.get("/joki/mobile-legends/hemat");

    const cheap: ProductJockeyRanked[] = response.data.data.data;

    const cheapList: ProductJockeyRanked[] = cheap.map((cheap) => ({
      id: cheap.id,
      name: cheap.name,
      image: cheap.image,
      price: cheap.price,
      discount: cheap.discount,
      discount_price: cheap.discount_price,
    }));

    return cheapList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
