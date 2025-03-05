import React from "react";
import CoreServices from "./CoreServices";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Counter from "./Counter";

function Home() {
  return (
    <div className="">
      <HeroSection />

      <CoreServices />
      <Counter />
      <FeatureSection />
    </div>
  );
}

export default Home;
