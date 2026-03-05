"use client";
import React from "react";
import { quantify } from "@/utils/font";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { dummyPromos } from "@/data/dummy/promo";

type Props = {};

const Promo = (props: Props) => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className={`${quantify.className} text-5xl text-white text-center`}>
        UPDATE PROMO
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // slidesPerView={1.5}
        pagination={{ clickable: true }}
        modules={[Autoplay, Scrollbar, A11y]}
        lazyPreloadPrevNext={1}
        className="bg-transparent"
        // spaceBetween={-50}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        {dummyPromos.concat(dummyPromos).map((promo, index) => (
          <SwiperSlide key={`${promo.id}-${index}`}>
            <Link target="_blank" href={promo.href || ""}>
              <Image
                width={1231}
                height={434}
                src={promo.image}
                className="w-full h-auto  rounded-xl mx-auto"
                alt="slide_image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promo;
