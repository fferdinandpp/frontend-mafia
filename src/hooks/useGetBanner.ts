import Error from "next/error";
import { ProductBanner } from "./../data/api/banner/types";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "@/data/api/banner/get-banner";
export const useGetBanner = () => {
  return useQuery<ProductBanner[], Error>({
    queryKey: ["banners"],
    queryFn: getBanner,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
