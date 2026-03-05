import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface FlashSaleData {
  id: number;
  name: string;
  discount: number;
  category: string;
  image: string;
  redirect_url: string;
  created_at: string;
  remaining_amount: number;
  product_id: number;
}

interface ServiceHook {
  services: FlashSaleData[] | null;
  loading: boolean;
  error: Error | null;
}
const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT,
});

export function useFlashSale(): ServiceHook {
  const [services, setServices] = useState<FlashSaleData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getFlashSale();
        setServices(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}

interface FlashSaleResponse {
  message: string;
  data: {
    data: FlashSaleData[];
    page: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}
const getFlashSale = async (): Promise<FlashSaleData[]> => {
  try {
    const response: AxiosResponse<FlashSaleResponse> = await baseAxios.get(
      "/flash-sale"
    );
    return response.data.data.data;
  } catch (error) {
    console.error("Error fetching service:", error);
    throw new Error("Failed to fetch service. Please try again later.");
  }
};
