import axios, { AxiosResponse } from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

interface CreateTransaction {
  account_code: string | null;
  email: string | null;
  name: string | null;
  whatsapp_number: string | undefined;
  payment_method: string | null;
  bid_amount: string | undefined;
  refund_method: string | null;
  refund_account: string | null;
}
interface CreateResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}
const createLelang = async (
  data: CreateTransaction
): Promise<CreateResponse> => {
  try {
    const response: AxiosResponse<CreateResponse> =
      await baseAxios.post<CreateResponse>("/auction/bid", data);
    return response.data;
  } catch (error: any) {
    console.error("Error creating top-up:", error);
    throw new Error(error.response.data.message);
  }
};
export default createLelang;
