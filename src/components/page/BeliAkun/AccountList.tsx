import AccountCard from "@/components/ui/card/AccountCard";
import Pagination from "@/components/ui/pagination/Pagination";
import AccountCardSkeleton from "@/components/ui/skeleton/AccountCardSkeleton";
import { TAccountFilters } from "@/data/api/account-market/get-account";
import { useGetAccountList } from "@/hooks/useAccountList";
import React, { useState, useEffect } from "react";

type Props = {
  filters: Omit<TAccountFilters, "page" | "limit">;
};

const AccountList = ({ filters }: Props) => {
  const [page, setPage] = useState<number>(1);
  const limit = 20;

  const queryParams: TAccountFilters = {
    ...filters,
    page: page,
    limit: limit,
  };

  const { data, isError, isLoading, error } = useGetAccountList(queryParams);

  const accountList = data?.data;
  const pageData = data?.page;

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  if (isError) {
    return <div>Error: {isError.valueOf.name}</div>;
  }

  return (
    <div className="bg-[url('/images/background/bg-mengkilat.webp')] h-full w-full bg-cover bg-center">
      <div className="w-11/12 xl:w-6xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: limit }).map((_, index) => (
                <AccountCardSkeleton key={index} />
              ))
            : accountList?.map((item) => (
                <AccountCard account={item} key={item.id} />
              ))}
        </div>

        {pageData && pageData.total_pages > 1 && (
          <Pagination
            currentPage={pageData.current_page}
            totalCount={pageData.total}
            pageSize={pageData.per_page}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default AccountList;
