"use client";
import { useGetAccountDetail } from "@/hooks/useGetAccountDetail";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ImageGallery from "./(components)/AccountImage";
import AccountName from "./(components)/AccountName";
import AccountDescription from "./(components)/AccountDescription";
import AccountPrice from "./(components)/AccountPrice";
import AccountSuggestion from "./(components)/AccountSuggestion";
import Modal from "@/components/ui/modal/Modal";
import BeliAkunModal from "./(components)/BeliAkunModal";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const code = useParams().code?.toString();
  const { data, isLoading, error, isError } = useGetAccountDetail(code || "");
  return (
    <div>
      <div className="w-11/12 xl:w-7xl mx-auto py-10">
        <div className="xl:flex-row flex-col flex items-start justify-between space-x-0 xl:space-x-5 relative w-full h-full">
          <div className="xl:sticky xl:top-52 w-full h-full">
            <ImageGallery
              createdAt={data?.created_at || ""}
              defaultImage={data?.images?.[0]?.image || ""}
              images={data?.images || []}
              name={data?.name || ""}
            />
          </div>
          <div className="flex flex-col xl:mt-0 mt-5 space-y-5 w-full">
            <AccountName account={data || undefined} />
            <AccountDescription account={data || undefined} />
            <AccountPrice
              onClick={() => setIsModalOpen(true)}
              account={data || undefined}
            />
          </div>
        </div>
      </div>
      <AccountSuggestion account={data || undefined} />

      <BeliAkunModal
        data={data || undefined}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
