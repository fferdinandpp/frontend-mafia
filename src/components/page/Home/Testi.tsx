"use client";
import React from "react";
import PakuIcon from "@/icons/paku-icon.svg";
import StarIcon from "@/icons/star-icon.svg";
import { useGetRating } from "@/hooks/useGetRating";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import RatingCardSkeleton from "@/components/ui/skeleton/RatingCardSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testi() {
  const { data, error, isError, isLoading } = useGetRating();

  const swiperOptions = {
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 5.3,
    spaceBetween: -30,

    navigation: false,
    className: "mySwiper mt-5 w-full",
  };

  const renderSkeletons = () => (
    <div className="mt-5 w-full overflow-hidden">
      <div className="flex flex-row space-x-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <RatingCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white border-[#0B41B2] -mt-10 text-[#0B41B2] border-4 rounded-b-3xl font-bold text-2xl shadow-xl py-3 px-20 relative">
        <PakuIcon className="absolute left-5 top-4" />
        <h2>TESTIMONI SOBAT</h2>
        <PakuIcon className="absolute right-5 top-4" />
      </div>

      <div className="w-11/12 mx-auto xl:w-7xl py-10">
        {isLoading ? (
          renderSkeletons()
        ) : isError ? (
          <div className="text-white text-center">
            Gagal memuat testimoni: {isError.valueOf.arguments}
          </div>
        ) : data ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={5.3}
            spaceBetween={-30}
            breakpoints={{
              320: {
                slidesPerView: 2.02,
                spaceBetween: 80,
              },
              768: {
                slidesPerView: 3.1,
                spaceBetween: -50,
              },
              1024: {
                slidesPerView: 5.3,
                spaceBetween: -30,
              },
            }}
            navigation={false}
            className="mySwiper mt-5 w-full"
          >
            {data.concat(data).map((rating, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-[url('/images/background/card-rating.webp')] bg-contain bg-center w-[206px] h-[229px] rounded-lg">
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="bg-white w-16 h-16 rounded-full"></div>
                    <h3 className="text-white mt-1">{rating.phone}</h3>
                    <h4 className="text-white w-full line-clamp-2 mt-1 text-center px-5">
                      {rating.description}
                    </h4>
                    <div className="flex items-center justify-center space-x-1 mt-3">
                      {[...Array(rating.rating).keys()].map((i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-white text-center">Belum ada testimoni.</div>
        )}
      </div>
    </div>
  );
}
