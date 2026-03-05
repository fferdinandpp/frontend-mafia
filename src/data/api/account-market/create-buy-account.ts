import axios, { AxiosResponse } from "axios";
import { createHash } from "crypto";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

export interface CreateTransaction {
  account_code: string | null;
  email: string | null;
  whatsapp_number: string | null;
  payment_method: string | null;
  other_contact: string | null;
  voucher_code: string | null;
  notes: string | null;
  payment_type: "full" | "dp";
}

export interface CreateResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}

const createBuyAccount = async (
  data: CreateTransaction
): Promise<CreateResponse> => {
  try {
    const secret = createHash("md5")
      .update("RAPS-" + data.account_code)
      .digest("hex");

    const payload = {
      ...data,
      // secret,
    };

    const response: AxiosResponse<CreateResponse> =
      await baseAxios.post<CreateResponse>(`/account/create`, payload);

    return response.data;
  } catch (error: any) {
    console.error("Error creating transaction:", error);
    throw new Error(error.response?.data?.message || "Gagal membuat transaksi");
  }
};

export default createBuyAccount;
