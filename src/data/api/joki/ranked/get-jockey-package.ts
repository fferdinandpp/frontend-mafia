import { baseAxios } from "../../base-url";
import { AxiosResponse } from "axios";
import { ProductJockeyRanked } from "./types";

export const getJokiPaket = async (): Promise<ProductJockeyRanked[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductJockeyRanked[];
      };
    }> = await baseAxios.get("joki/mobile-legends/paket");

    const jockeyPackage: ProductJockeyRanked[] = response.data.data.data;

    const jockeyPackageList: ProductJockeyRanked[] = jockeyPackage.map(
      (jockeyPackage) => ({
        id: jockeyPackage.id,
        name: jockeyPackage.name,
        image: jockeyPackage.image,
        price: jockeyPackage.price,
        discount: jockeyPackage.discount,
        discount_price: jockeyPackage.discount_price,
      })
    );

    return jockeyPackageList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
