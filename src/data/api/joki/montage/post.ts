/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { JokiState } from "@/store/reducer/joki";

interface MontageResponse {
  message: string;
  data: {
    qr_payment: string;
    reff_id: string;
  };
}

const createJokiMontage = async (data: JokiState): Promise<MontageResponse> => {
  try {
    const response: AxiosResponse<MontageResponse> = await baseAxios.post(
      "/joki/mobile-legends/montage/create",
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default createJokiMontage;
