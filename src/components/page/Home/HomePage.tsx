import { useGetBanner } from "@/hooks/useGetBanner";
import React from "react";
import Banner from "./Banner";
import Popular from "./Popular";
import TopUpJoki from "./TopUpJoki";
import RunningText from "@/components/animation/RunningText";
import AccountDisplay from "./AccountDisplay";
import OurServices from "./OurServices";
import Promo from "./Promo";
import WhyMafia from "./WhyMafia";
import FAQ from "./FAQ";
import Rating from "./Rating";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <RunningText />
      <Popular />
      <AccountDisplay />
      <OurServices />
      <Promo />
      <WhyMafia />
      <FAQ />
      <Rating />
    </div>
  );
}
