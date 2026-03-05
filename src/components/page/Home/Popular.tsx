"use client";
import React from "react";
import PopularIcon from "@/icons/popular-icon.svg";
import Image from "next/image";
import { useGetAccountList } from "@/hooks/useAccountList";
import AccountCard from "@/components/ui/card/AccountCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Link from "next/link";
import AccountCardSkeleton from "@/components/ui/skeleton/AccountCardSkeleton";
import { useGetDataMaster } from "@/hooks/useDataMaster";
import { amarante, quantify } from "@/utils/font";

export default function Popular() {
  const { data, error, isError, isLoading } = useGetAccountList();
  const {
    data: dataMaster,
    error: dataMasterError,
    isLoading: dataMasterLoading,
  } = useGetDataMaster();
  const instagram = dataMaster?.find((item) =>
    item.name.startsWith("Instagram"),
  );

  return (
    <div className="relative h-full w-full max-w-[1440px] mx-auto">
      <Image
        src={"/images/other/pesawat-kiri.webp"}
        alt="Populer Akun"
        width={100}
        height={60}
        className="w-auto h-auto absolute"
      />

      <Image
        src={"/images/other/green-blur-item.webp"}
        alt="Populer Akun"
        width={100}
        height={100}
        className="w-[350px] -right-44 h-[350px] bottom-5 absolute"
      />

      <Image
        src={"/images/other/pesawat-kanan.webp"}
        alt="Populer Akun"
        width={100}
        height={60}
        className="w-auto h-auto absolute bottom-5 right-0"
      />

      <Image
        src={"/images/other/green-blur-item.webp"}
        alt="Populer Akun"
        width={100}
        height={100}
        className="w-[350px] -left-44 h-[350px] top-5 absolute"
      />

      <p
        className={`text-[#C2FF00] rotate-90 absolute top-80 ${amarante.className} text-6xl`}
      >
        {" "}
        {"<<<<<<<<<<"}{" "}
      </p>

      <p
        className={`text-[#C2FF00] right-5 -rotate-90 absolute top-64 ${amarante.className} text-6xl`}
      >
        {" "}
        {"<<<<<<<<<<"}{" "}
      </p>
      <div className="absolute top-10 green-blur w-[233px] h-[233px]"></div>
      <div className="w-11/12 xl:w-7xl mx-auto py-10">
        <div className={`${quantify.className} mt-5 text-4xl`}>
          <div className="flex items-center justify-between ">
            <h3 className="text-[#C2FF00] opacity-10">PILIHAN GAME POPULER</h3>
            <h3 className="text-[#C2FF00] ">PILIHAN GAME POPULER</h3>
            <h3 className="text-[#C2FF00] opacity-10">PILIHAN GAME POPULER</h3>
          </div>
        </div>

        <div className="-mt-5">
          <div className="flex items-end space-x-3 justify-center">
            <Image
              alt="Akun eFootball"
              src={"/images/card/efootball.webp"}
              width={305}
              height={509}
            />
            <Image
              alt="Akun FC Mobile"
              src={"/images/card/fcmobile.webp"}
              width={305}
              height={509}
            />
          </div>

          {/* <Swiper
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
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 10,
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
                      <AccountCard account={acc} />
                    </SwiperSlide>
                  ))}
            </div>
          </Swiper> */}
        </div>
      </div>
      <div className="relative">
        <Image
          alt="Ballon d'Or"
          src={"/images/other/ballondor.webp"}
          width={329}
          height={411}
          className="absolute z-10 -top-44 -left-36"
        />
        <div className="bg-[url('/images/background/akun-ganteng.webp')] bg-cover bg-center border-y-2 border-y-[#FEF601] py-5">
          <h3
            className={`${quantify.className} text-4xl text-[#FEF601] text-center`}
          >
            AKUN GANTENG HARI INI
          </h3>
        </div>
      </div>
    </div>
  );
}
