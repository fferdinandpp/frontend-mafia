import { AxiosResponse } from "axios";
import { ProductAccountMarket } from "./types";
import { baseAxios } from "../base-url";

export const getFeaturedAccount = async (): Promise<ProductAccountMarket[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductAccountMarket[];
      };
    }> = await baseAxios.get("/account/?sort=selling_price-desc");

    const accounts: ProductAccountMarket[] = response.data.data.data;

    const accountImages: ProductAccountMarket[] = accounts.map((accounts) => ({
      id: accounts.id,
      name: accounts.name,
      code: accounts.code,
      price: accounts.price,
      discount: accounts.discount,
      collector_type: accounts.collector_type,
      status: accounts.status,
      images: accounts.images,
      thumbnail: accounts.images.length > 0 ? accounts.images[0].image : null,
      detail_images: accounts.images.slice(1).map((img) => ({
        id: img.id,
        image: img.image,
      })),
      created_at: accounts.created_at,
      discount_price: accounts.discount_price,
    }));

    return accountImages;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
