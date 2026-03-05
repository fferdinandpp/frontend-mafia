import getDetailAccount, {
  AccountDetail,
} from "@/data/api/account-market/get-detail";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";

export const useGetAccountDetail = (code: string) => {
  return useQuery<AccountDetail, Error>({
    queryKey: ["accountDetail"],
    queryFn: () => getDetailAccount(code),
  });
};
