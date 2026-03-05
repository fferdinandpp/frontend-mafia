import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { ProductMontage } from "./types";

export const getMontagePrice = async (): Promise<ProductMontage[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductMontage[];
      };
    }> = await baseAxios.get("/joki/mobile-legends/montage");

    const montagePrices: ProductMontage[] = response.data.data.data;

    const montagePricesList: ProductMontage[] = montagePrices.map(
      (montage) => ({
        id: montage.id,
        name: montage.name,
        image: montage.image,
        price: montage.price,
        discount: montage.discount,
      })
    );

    return montagePricesList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
