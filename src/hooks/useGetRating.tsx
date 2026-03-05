import { getRating } from "@/data/api/rating/get-rating";
import { ProductRating } from "@/data/api/rating/types";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";

export const useGetRating = () => {
  return useQuery<ProductRating[], Error>({
    queryKey: ["rating"],
    queryFn: () => getRating(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
