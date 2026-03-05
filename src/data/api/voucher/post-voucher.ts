/* eslint-disable */

import axios, { AxiosError, AxiosResponse } from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

interface GetVoucherData {
  service_id: number;
  voucher_code: string;
  price: string | null;
}

export interface GetVoucherResponseData {
  message: string;
  voucher_code: string;
  service_id: number;
}

interface ErrorResponse {
  type: string;
  message: string;
}

const postVoucher = async (data: GetVoucherData): Promise<string> => {
  try {
    const response: AxiosResponse<GetVoucherResponseData> =
      await baseAxios.post<GetVoucherResponseData>("/voucher/validate", data);

    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        const status = axiosError.response.status;
        const responseData = axiosError.response.data as { message: string };
        if (status === 409 && responseData && responseData.message) {
          throw new Error(responseData.message);
        }
        if (status === 422 && responseData && responseData.message) {
          throw new Error(responseData.message);
        }
      }
    }
    throw new Error("Failed to fetch voucher. Please try again later.");
  }
};

export default postVoucher;
