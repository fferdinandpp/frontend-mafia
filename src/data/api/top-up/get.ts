import { baseAxios } from "@/utils/baseAxios";
import { AxiosResponse } from "axios";

export interface TopUpProducts {
  id: number;
  name: string;
  price: number;
  discount: string;
  image: string;
  category: string;
  discount_price?: string;
}

export const getTopUpData = async (slug: string): Promise<TopUpProducts[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: TopUpProducts[];
      };
    }> = await baseAxios.get(`/top-up/${slug}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const productTopUp: TopUpProducts[] = response.data.data.data;

    const topUpProducts: TopUpProducts[] = productTopUp.map((topUp) => ({
      id: topUp.id,
      name: topUp.name,
      price: topUp.price,
      discount: topUp.discount,
      image: topUp.image,
      category: topUp.category,
      discount_price: topUp.discount_price,
    }));

    return topUpProducts;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getTopUpDataML = async (
  slug: string,
  region: string
): Promise<TopUpProducts[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: TopUpProducts[];
      };
    }> = await baseAxios.get(`/top-up/${slug}?region=${region}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const productTopUp: TopUpProducts[] = response.data.data.data;

    const topUpProducts: TopUpProducts[] = productTopUp.map((topUp) => ({
      id: topUp.id,
      name: topUp.name,
      price: topUp.price,
      discount: topUp.discount,
      image: topUp.image,
      category: topUp.category,
      discount_price: topUp.discount_price,
    }));

    return topUpProducts;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
