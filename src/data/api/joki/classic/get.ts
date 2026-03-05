import { baseAxios } from "../../base-url";
import { AxiosResponse } from "axios";
import { ProductClassic } from "./types";

export const getClassic = async (): Promise<ProductClassic[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductClassic[];
      };
    }> = await baseAxios.get("/joki/mobile-legends/classic");

    const classics: ProductClassic[] = response.data.data.data;

    const classicList: ProductClassic[] = classics.map((classic) => ({
      id: classic.id,
      name: classic.name,
      image: classic.image,
      price: classic.price,
      discount: classic.discount,
      discount_price: classic.discount_price,
    }));

    return classicList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
