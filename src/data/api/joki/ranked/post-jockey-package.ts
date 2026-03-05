import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { JokiState } from "@/store/reducer/joki";

interface CheapResponse {
  message: string;
  data: {
    qr_payment: string;
    reff_id: string;
  };
}

const createJokiPaket = async (data: JokiState): Promise<CheapResponse> => {
  try {
    const response: AxiosResponse<CheapResponse> = await baseAxios.post(
      "/joki/mobile-legends/paket/create",
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default createJokiPaket;
