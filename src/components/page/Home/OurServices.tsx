import { quantify } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className="my-10 w-full mx-auto">
      <h2
        className={`our-services-text ${quantify.className} text-center text-6xl `}
      >
        LAYANAN KAMI
      </h2>

      <div className="mx-auto w-fit  lg:mt-10 mt-10 relative ">
        <div className="flex space-x-4">
          <Link
            className="hover:scale-102 transition-transform duration-200 ease-in-out"
            href="/top-up/valorant"
          >
            <Image
              width={610}
              height={151}
              src={"/images/services/beli-akun.webp"}
              alt="top-up valo"
            />
          </Link>
          <Link
            className="hover:scale-102 transition-transform duration-200 ease-in-out"
            href="/top-up/mobile-legends"
          >
            <Image
              width={610}
              height={151}
              src={"/images/services/cs.webp"}
              alt="top-up valo"
            />
          </Link>
        </div>
        <Image
          src={"/images/services/center-icon.webp"}
          width={250}
          height={250}
          className="absolute sm:top-[50px] md:top-[70px] lg:top-[70px] xl:top-[85px]  top-6 left-0 lg:left-0 flex mx-auto  inset-x-0 w-14 sm:w-[85px] md:w-[100px] lg:w-[120px] xl:w-[150px] animate-spin rounded-full "
          style={{
            animationDuration: "1.8s",
          }}
          alt="center icon"
        />

        <div className="flex mt-5 space-x-4">
          <Link
            className="hover:scale-102 transition-transform duration-200 ease-in-out"
            href="https://www.valsewa.com"
            target="_blank"
          >
            <Image
              width={610}
              height={151}
              src={"/images/services/jual-akun.webp"}
              alt="top-up valo"
            />
          </Link>
          <Link
            target="_blank"
            className="hover:scale-102 transition-transform duration-200 ease-in-out"
            href="https://api.whatsapp.com/send?phone=6285176983434&text=Halo%20admin%20VALJUBEL%2C%20aku%20mau%20JUAL%20akun%20Valorant%20nih!"
          >
            {/* <Image width={610} height={151} src={JokiValo} alt="top-up valo" /> */}
            <Image
              src={"/images/services/sosial-media.webp"}
              alt="top-up valo"
              width={610}
              height={151}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
