import { AxiosResponse } from "axios";
import { baseAxios } from "../base-url";

export interface MasterListItem {
  id: number;
  name: string;
  type: string;
  value: string;
}

interface PageInfo {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

interface MasterListResponse {
  message: string;
  data: {
    data: MasterListItem[];
    page: PageInfo;
  };
}

export const getDataMaster = async (): Promise<MasterListItem[]> => {
  try {
    const response: AxiosResponse<MasterListResponse> = await baseAxios.get(
      "/data-master?per_page=9999"
    );
    return response.data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
