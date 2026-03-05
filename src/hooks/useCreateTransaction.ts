import createBuyAccount, {
  CreateResponse,
  CreateTransaction,
} from "@/data/api/account-market/create-buy-account";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface MutateVariables {
  data: CreateTransaction;
}

export const useCreateTransaction = () => {
  const router = useRouter();
  return useMutation<CreateResponse, Error, MutateVariables>({
    mutationFn: ({ data }) => createBuyAccount(data),

    onSuccess: (data) => {
      router.push(`/riwayat/${data.data.reff_id}`);
    },
    onError: (error) => {
      console.error("Transaksi Gagal:", error.message);
    },
  });
};
