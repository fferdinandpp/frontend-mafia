"use client";
import React from "react";
import { useGetBanner } from "@/hooks/useGetBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { quantify } from "@/utils/font";

export default function Banner() {
  // const { data, status } = useGetBanner();

  const dummyBanner = {
    id: 0,
    name: "Mafia Store Banner",
    image: "/images/banner/bannermafia (1).webp",
    redirect_url: "",
    type: "dummy",
    number_order: 0,
  };

  // const banners = data && data.length > 0 ? data : [dummyBanner];
  const banners = [dummyBanner];

  // if (status === "pending") {
  //   return (
  //     <div className="py-14 bg-[url('/images/background/bg-bannerslide.webp')] bg-cover bg-center ">
  //       <div className="max-w-7xl mx-auto">
  //         <Swiper
  //           effect={"coverflow"}
  //           grabCursor={true}
  //           centeredSlides={true}
  //           loop={true}
  //           autoplay={{ delay: 2000, disableOnInteraction: false }}
  //           // slidesPerView={1.5}
  //           pagination={{ clickable: true }}
  //           modules={[Autoplay, Scrollbar, A11y]}
  //           lazyPreloadPrevNext={1}
  //           className="bg-transparent"
  //           // spaceBetween={-50}
  //           breakpoints={{
  //             320: {
  //               slidesPerView: 1,
  //               spaceBetween: 0,
  //             },
  //             768: {
  //               slidesPerView: 1.2,
  //               spaceBetween: 50,
  //             },
  //             1024: {
  //               slidesPerView: 1.5,
  //               spaceBetween: 50,
  //             },
  //           }}
  //           style={{ paddingLeft: "16px", paddingRight: "16px" }}
  //         >
  //           <SwiperSlide key="dummy-banner">
  //             <Image
  //               width={1231}
  //               height={434}
  //               src={dummyBanner.image}
  //               className="w-full h-auto rounded-xl mx-auto"
  //               alt={dummyBanner.name}
  //               priority
  //             />
  //           </SwiperSlide>
  //         </Swiper>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="py-14  bg-[url('/images/background/bg-bannerslide.webp')] bg-cover bg-center  ">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="max-w-7xl mx-auto">
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
                slidesPerView: 1.2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
            }}
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            {banners
              .concat(banners)
              .concat(banners)
              .concat(banners)
              .concat(banners)
              .concat(banners)
              .concat(banners)
              .concat(banners)
              .map((banner, index) => (
                <SwiperSlide key={`${banner.id}-${index}`}>
                  {banner.redirect_url ? (
                    <Link target="_blank" href={banner.redirect_url}>
                      <Image
                        width={1231}
                        height={434}
                        src={banner.image}
                        className="w-full h-auto rounded-xl mx-auto"
                        alt={banner.name || "slide_image"}
                      />
                    </Link>
                  ) : (
                    <Image
                      width={1231}
                      height={434}
                      src={banner.image}
                      className="w-full h-auto rounded-xl mx-auto"
                      alt={banner.name || "slide_image"}
                    />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="mt-8 flex flex-col items-center justify-center text-white text-center -space-y-2.5">
            <h1 className={`${quantify.className} text-5xl`}>
              SELAMAT DATANG DI MAFIASTORE.COM
            </h1>
            <h2 className="uppercase text-lg font-semibold mt-4 max-w-2xl mx-auto">
              Platform terpercaya untuk jual beli akun eFootball & FC Mobile
              dengan standar keamanan tinggi dan akun berkualitas pilihan.
            </h2>
          </div>
        </div>
        <div className="absolute left-0 -bottom-14">
          <Image
            src={"/images/other/banner-kiri.webp"}
            alt="Icon Banner Kiri"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute right-0 -bottom-14">
          <Image
            src={"/images/other/banner-kanan.webp"}
            alt="Icon Banner Kiri"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
