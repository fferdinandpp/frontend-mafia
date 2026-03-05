import { AccountDetail } from "@/data/api/account-market/get-detail";
import React from "react";

type Props = {};

const AccountDescription = ({
  account,
}: {
  account: AccountDetail | undefined;
}) => {
  return (
    <div className="bg-[#0B3CAA] px-5 py-4 rounded-xl w-full text-white">
      <div
        className=" text-white"
        dangerouslySetInnerHTML={{
          __html: account?.description || "",
        }}
      />
    </div>
  );
};

export default AccountDescription;
