import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { JokiState } from "@/store/reducer/joki";

interface RisingResponse {
  message: string;
  data: {
    qr_payment: string;
    reff_id: string;
  };
}

const createJokiRising = async (data: JokiState): Promise<RisingResponse> => {
  try {
    const response: AxiosResponse<RisingResponse> = await baseAxios.post(
      "/joki/mobile-legends/rising/create",
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default createJokiRising;
