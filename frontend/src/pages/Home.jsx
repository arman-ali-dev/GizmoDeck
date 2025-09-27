import React from "react";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "../components/Home/CategorySection";
import ProductSection from "../components/Product/ProductSection";
import DiscountBanner from "../components/Home/DiscountBanner";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <DiscountBanner />
      <WhyChooseUsSection />
      <div className="block lg:hidden">
        <ProductSection />
      </div>
    </>
  );
};

export default Home;
