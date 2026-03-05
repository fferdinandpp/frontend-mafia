import {
  getAccount,
  getAccountPage,
  ProductAccountMarketResponse,
  TAccountFilters,
} from "@/data/api/account-market/get-account";
import { ProductAccountMarket } from "@/data/api/account-market/types";
import { Page } from "@/data/api/auction/get";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";

export const useGetAccountList = (params?: TAccountFilters) => {
  return useQuery<ProductAccountMarketResponse, Error>({
    queryKey: ["accounts", params],
    queryFn: () => getAccount(params ?? ({} as TAccountFilters)), // Panggil fungsi baru kita
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export const useGetAccountPage = (page?: number) => {
  return useQuery<Page, Error>({
    queryKey: ["page", page],
    queryFn: () => getAccountPage(page),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
