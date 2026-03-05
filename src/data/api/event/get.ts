import { AxiosResponse } from "axios";
import { Event } from "./types";
import { baseAxios } from "../base-url";

export const getEvent = async (): Promise<Event[]> => {
  try {
    const response: AxiosResponse<{
      message: string;
      data: {
        data: Event[];
      };
    }> = await baseAxios.get("/event", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data.data.data;
  } catch (error) {
    console.error("Failed to fetch event data:", error);
    throw error;
  }
};
