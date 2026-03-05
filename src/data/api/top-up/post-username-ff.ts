import { baseAxios } from "@/utils/baseAxios";
import axios, { AxiosResponse } from "axios";

export interface GetUserNameData {
  game_id: string | null;
}

export interface GetUserNameResponseData {
  game_id: string;
  username: string;
}

interface GetUserNameResponse {
  message: string;
  data: GetUserNameResponseData;
}

const postUsernameFF = async (
  data: GetUserNameData
): Promise<GetUserNameResponseData> => {
  try {
    const response: AxiosResponse<GetUserNameResponse> =
      await baseAxios.post<GetUserNameResponse>(
        `/top-up/free-fire/get-username`,
        data
      );

    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default postUsernameFF;
