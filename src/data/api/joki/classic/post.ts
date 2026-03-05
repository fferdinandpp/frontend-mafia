import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { JokiState } from "@/store/reducer/joki";

interface ClassicResponse {
  message: string;
  data: {
    qr_payment: string;
    reff_id: string;
  };
}

const createJokiClassic = async (data: JokiState): Promise<ClassicResponse> => {
  try {
    const response: AxiosResponse<ClassicResponse> = await baseAxios.post(
      "/joki/mobile-legends/classic/create",
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default createJokiClassic;
