import {
  getDataMaster,
  MasterListItem,
} from "@/data/api/data-master/get-data-master";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";

export const useGetDataMaster = () => {
  return useQuery<MasterListItem[], Error>({
    queryKey: ["dataMaster"],
    queryFn: getDataMaster,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
