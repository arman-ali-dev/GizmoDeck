import React from "react";
import heroBanner from "../../assets/hero-banner.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        className="xl:px-14 px-8 xl:pt-[190px] pt-[195px] pb-[210px]  xl:pb-[280px] bg-center xl:bg-top  bg-cover "
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="text-center xl:mt-[80px]">
          <h1 className="xl:text-[64px] md:text-[32px] text-[24px] text-white ">
            Smart Tech, Smart Life
          </h1>
          <p className="text-[#eee] xl:text-[20px] lg:text-[13px] text-[9px] md:w-[50%] -mt-2 mx-auto">
            Discover cutting-edge gadgets and electronics designed to make your
            life smarter. Shop the latest tech with unbeatable quality and
            style.
          </p>
          <Link className="text-[#eee] bg-[var(--primary-color)] text-[9px] xl:text-[17px] xl:px-8 px-6 py-[5px] xl:py-[8px] rounded-full xl:mt-4 mt-2 inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
