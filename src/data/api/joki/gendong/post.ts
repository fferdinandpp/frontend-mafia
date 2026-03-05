import { JokiState } from "@/store/reducer/joki";
import axios, { AxiosResponse } from "axios";

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

interface JockeyResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}
const createJokiGendong = async (data: JokiState): Promise<JockeyResponse> => {
  try {
    const response: AxiosResponse<JockeyResponse> =
      await baseAxios.post<JockeyResponse>(
        "/joki/mobile-legends/gendong/create",
        data
      );
    return response.data;
  } catch (error: any) {
    console.error("Error creating top-up:", error);
    throw new Error(error.response.data.message);
  }
};
interface TopUpData {}

interface JockeyResponse {
  message: string;
  data: {
    payment_information: string;
    reff_id: string;
  };
}
export default createJokiGendong;
