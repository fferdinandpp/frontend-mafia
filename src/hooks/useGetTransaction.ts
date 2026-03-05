import { getHistory } from "@/data/api/history/get-history";
import { ProductHistory } from "@/data/api/history/types";
import { useQuery } from "@tanstack/react-query";

export const useGetTransaction = (code: string) => {
  return useQuery<ProductHistory[], Error>({
    queryKey: ["history", code],
    queryFn: () => getHistory(code),
    refetchInterval: 2000,
  });
};
