import axios, { AxiosResponse } from "axios";
import { VoucherData } from "./types";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

export const getVouchers = async (): Promise<VoucherData[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: VoucherData[];
      };
    }> = await baseAxios.get("/voucher", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getVoucherWithId = async (
  service: number
): Promise<VoucherData[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: VoucherData[];
      };
    }> = await baseAxios.get(`/voucher/${service}/service`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getAppliedVoucherPrice = async (
  voucher_code: string,
  price: number
): Promise<number> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: number;
    }> = await baseAxios.get(
      `/voucher/apply-voucher-price?voucher_code=${voucher_code}&price=${price}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch applied voucher price");
  }
};
