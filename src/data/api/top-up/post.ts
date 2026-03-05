/* eslint-disable */

import { baseAxios } from "@/utils/baseAxios";
import axios, { AxiosResponse } from "axios";

interface TopUpInput {
  ID: string;
  Server: string;
}

interface TopUpData {
  username?: string | null;
  game_id: string | null;
  zone_id: string | null;
  inputs: TopUpInput;
  product_id: number | null;
  payment_method: string | null;
  email: string | null;
  whatsapp_number: string | null;
  slug: string | null;
  refund_method: string | null;
  refund_account: string | null;
}

interface TopUpDataMcgg {
  game_id: string | null;
  zone_id: string | null;
  product_id: string | null;
  payment_method: string | null;
  email: string | null;
  whatsapp_number: string | null;
  start_with: string;
  refund_method: string | null;
  refund_account: string | null;
}
interface TopUpResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}
const createTopUp = async (data: TopUpData): Promise<TopUpResponse> => {
  try {
    const response: AxiosResponse<TopUpResponse> =
      await baseAxios.post<TopUpResponse>(`/top-up/${data.slug}/create`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
export const createTopUpMcgg = async (
  data: TopUpDataMcgg
): Promise<TopUpResponse> => {
  try {
    const response: AxiosResponse<TopUpResponse> =
      await baseAxios.post<TopUpResponse>(
        "/top-up/magic-chess-go/create",
        data
      );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

interface TopUpResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}
export default createTopUp;
