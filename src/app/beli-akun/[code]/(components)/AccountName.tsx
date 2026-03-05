import { AccountDetail } from "@/data/api/account-market/get-detail";
import React from "react";

type Props = {};

const AccountName = ({ account }: { account: AccountDetail | undefined }) => {
  return (
    <div className="bg-[#0B3CAA] px-5 py-4 rounded-xl w-full text-white">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-3xl ">{account && account.name}</h1>
        <h2 className="glass-card px-3 py-1 rounded-lg  font-bold text-xl">
          {account && account.code}
        </h2>
      </div>
      <h3 className="text-lg mt-3">
        <span className="font-bold">Hero </span>: {account?.total_hero} |{" "}
        <span className="font-bold">Skin </span>: {account?.total_skin} | Rank:{" "}
        <span className="font-bold">Rank </span>: {account?.highest_rank}
      </h3>
    </div>
  );
};

export default AccountName;
