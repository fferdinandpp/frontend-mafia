import { AxiosResponse } from "axios";
import { AccountResponse, ProductAccountMarket, TPages } from "./types";
import { baseAxios } from "../base-url";

export const getAllAccounts = async (
  game?: string,
  page: number = 1,
  search: string = "",
  limit: number = 18,
  min_price?: number,
  max_price?: number,
  min_hero_count?: number,
  min_skin_count?: number,
  highest_rank?: string,
  collector_type?: string,
  current_rank?: string
): Promise<AccountResponse> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: ProductAccountMarket[];
        page: TPages;
      };
    }> = await baseAxios.get(`/account/${game}`, {
      params: {
        search,
        limit,
        page,
        ...(min_price !== undefined && { min_price }),
        ...(max_price !== undefined && { max_price }),
        ...(min_hero_count !== undefined && { min_hero_count }),
        ...(min_skin_count !== undefined && { min_skin_count }),
        ...(highest_rank !== undefined && { highest_rank }),
        ...(collector_type !== undefined && { collector_type }),
        ...(current_rank !== undefined && { current_rank }),
      },
    });

    const accounts: ProductAccountMarket[] = response.data.data.data.map(
      (account) => ({
        ...account,
        thumbnail:
          account.images && account.images.length > 0
            ? account.images[0].image
            : null,
        detail_images: account.images
          ? account.images.slice(1).map((img) => ({
              id: img.id,
              image: img.image,
            }))
          : [],
      })
    );

    return {
      accounts,
      pagination: response.data.data.page,
    };
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw new Error("Failed to fetch accounts");
  }
};
