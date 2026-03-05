import { baseAxios } from "../../base-url";
import { AxiosResponse } from "axios";
import { ProductRising } from "./types";

export const getRising = async (): Promise<ProductRising[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductRising[];
      };
    }> = await baseAxios.get("/joki/mobile-legends/rising");

    const risings: ProductRising[] = response.data.data.data;

    const risingList: ProductRising[] = risings.map((rising) => ({
      id: rising.id,
      name: rising.name,
      image: rising.image,
      price: rising.price,
      discount: rising.discount,
    }));

    return risingList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
