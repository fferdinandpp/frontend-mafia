import AccountCard from "@/components/ui/card/AccountCard";
import AccountCardSkeleton from "@/components/ui/skeleton/AccountCardSkeleton";
import { TAccountFilters } from "@/data/api/account-market/get-account";
import { AccountDetail } from "@/data/api/account-market/get-detail";
import { useGetAccountList } from "@/hooks/useAccountList";
import Link from "next/link";
import React from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const AccountSuggestion = ({
  account,
}: {
  account: AccountDetail | undefined;
}) => {
  const accountName = account && account.name.split(" ")[0];
  const queryParams: TAccountFilters = {
    search: accountName,
  };
  const { data, isLoading, error, isError } = useGetAccountList(queryParams);
  return (
    <div className="bg-[url('/images/background/bg-beli-akun.webp')] bg-cover bg-center w-full h-full ">
      <div className="w-11/12 xl:w-7xl mx-auto py-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.8,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.1,
              spaceBetween: 40,
            },
          }}
          navigation={false}
          className="mySwiper mt-5"
        >
          <div className="mt-3">
            {isLoading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <AccountCardSkeleton key={index} />
                  </SwiperSlide>
                ))
              : data?.data.map((acc) => (
                  <SwiperSlide key={`${acc.code}`}>
                    <Link href={`/beli-akun/mobile-legends/${acc.code}`}>
                      <AccountCard account={acc} />
                    </Link>
                  </SwiperSlide>
                ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default AccountSuggestion;
