import { AxiosResponse } from "axios";
import { ProductMagicChess } from "./types";
import { baseAxios } from "../../base-url";

export const getMagicChess = async (): Promise<ProductMagicChess[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductMagicChess[];
      };
    }> = await baseAxios.get("/joki/mobile-legends/magic-chess");

    const magicChess: ProductMagicChess[] = response.data.data.data;
    const magicChessList: ProductMagicChess[] = magicChess.map((chess) => ({
      id: chess.id,
      name: chess.name,
      image: chess.image,
      price: chess.price,
      discount: chess.discount,
      category: chess.category,
    }));

    return magicChessList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
