import React from "react";

import HeaderSection from "./../../sections/headerSection/index";
import BestSellingCategories from "../../../containers/sections/bestSellingCategories";
import BestSellingProducts from "../../../containers/sections/bestSellingProducts";
import PosterSection from "./../../sections/posterSection/index";

function LandingPage() {
  return (
    <>
      <HeaderSection />
      <BestSellingCategories />
      <BestSellingProducts />
      <PosterSection />
    </>
  );
}

export default LandingPage;
