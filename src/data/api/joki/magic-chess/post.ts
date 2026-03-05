/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosResponse } from "axios";
import { baseAxios } from "../../base-url";
import { JokiState } from "@/store/reducer/joki";

interface MagicChessResponse {
  message: string;
  data: {
    qr_payment: string;
    reff_id: string;
  };
}

const createJokiMagicChess = async (
  data: JokiState
): Promise<MagicChessResponse> => {
  try {
    const response: AxiosResponse<MagicChessResponse> = await baseAxios.post(
      "/joki/mobile-legends/magic-chess/create",
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default createJokiMagicChess;
