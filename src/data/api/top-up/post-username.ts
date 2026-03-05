import { baseAxios } from "@/utils/baseAxios";
import axios, { AxiosResponse } from "axios";

export interface GetUserNameData {
  game_id: string | null;
  zone_id?: string | null;
  product_id?: number | null;
}

export interface GetUserNameResponseData {
  game_id: string;
  username: string;
  zone_id: string;
  product_id: string;
  discount_price: string;
  normal_price: string;
  region: string;
  regionCode: string;
}

interface GetUserNameResponse {
  message: string;
  data: GetUserNameResponseData;
}

const postUsername = async (
  data: GetUserNameData
): Promise<GetUserNameResponseData> => {
  try {
    const response: AxiosResponse<GetUserNameResponse> =
      await baseAxios.post<GetUserNameResponse>(
        `/top-up/mobile-legends/get-username`,
        data
      );

    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default postUsername;
