"use client";

import PrimaryButton from "@/components/ui/button/PrimaryButton";
import AccountCard from "@/components/ui/card/AccountCard";
import {
  dummyEfootballAccounts,
  dummyFCMobileAccounts,
} from "@/data/dummy/account";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

const AccountDisplay = (props: Props) => {
  const noop = () => {};

  const baseSwiperConfig: SwiperOptions = {
    centeredSlides: true,
    slidesPerView: 1.4,
    spaceBetween: 16,
    navigation: true,
    pagination: { clickable: true },
    modules: [Navigation, Pagination, A11y],
    breakpoints: {
      640: { slidesPerView: 1.6, spaceBetween: 16 },
      1024: { slidesPerView: 1.8, spaceBetween: 20 },
      1280: { slidesPerView: 1.9, spaceBetween: 24 },
    },
  };

  return (
    <div className="py-10">
      <div className="w-full mx-auto ">
        <div className="max-w-7xl mx-auto w-full flex justify-center">
          <PrimaryButton title="E-FOOTBALL" onClick={noop} variant="blue" />
          <PrimaryButton title="FC MOBILE" onClick={noop} variant="yellow" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-10 max-w-[1440px] w-full mx-auto">
          <Swiper
            {...baseSwiperConfig}
            className="account-display-swiper border-account-blue rounded-r-3xl"
            loop={dummyFCMobileAccounts.length > 1}
          >
            {dummyFCMobileAccounts.map((item) => (
              <SwiperSlide
                key={item.id}
                className="account-display-slide !flex !justify-center !h-auto py-10"
              >
                <div className="account-display-slide-inner">
                  <AccountCard account={item} variant="yellow" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            {...baseSwiperConfig}
            className="account-display-swiper border-account-yellow rounded-l-3xl"
            loop={dummyEfootballAccounts.length > 1}
          >
            {dummyEfootballAccounts.map((item) => (
              <SwiperSlide
                key={item.id}
                className="account-display-slide !flex !justify-center !h-auto py-10"
              >
                <div className="account-display-slide-inner">
                  <AccountCard account={item} variant="blue" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AccountDisplay;
