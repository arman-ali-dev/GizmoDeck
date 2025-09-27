import React from "react";
import LaptopDealImage from "../../assets/laptop-deal.png";
import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <>
      <section className="bg-[#0E0E0E] py-[40px] xl:px-0 px-4 xl:mt-12  mt-10">
        <div className="grid md:grid-cols-2  items-center">
          <div className="col-span-1">
            <img
              src={LaptopDealImage}
              alt=""
              className="xl:h-[270px] h-[180px] mx-auto object-center"
            />
          </div>

          <div className="text-center xl:mt-0 mt-5">
            <p className="text-white xl:text-[17px] lg:text-[13px]  text-[11px] xl:w-[80%] mx-auto">
              Get high-performance desktops at unbeatable prices. Perfect for
              gaming, work, and multitasking — don’t miss out on this special
              offer!
            </p>

            <h1 className="xl:text-[52px] lg:text-[32px] text-[26px] mt-1 mb-1 text-[#eee] opacity-70 categoryHeading">
              30% OFF
            </h1>
            <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)]  xl:px-8 px-5 py-[5px] xl:py-[8px] rounded-full  inline-block  -mt-2">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountBanner;
