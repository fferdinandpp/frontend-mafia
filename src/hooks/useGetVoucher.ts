// hooks/useGetVouchers.ts
import { getVouchers } from "@/data/api/voucher/get-voucher";
import { useQuery } from "@tanstack/react-query";

export const useGetVouchers = () => {
  return useQuery({
    queryKey: ["vouchers"],
    queryFn: getVouchers,
  });
};
