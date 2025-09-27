import React from "react";
import { Link } from "react-router-dom";
import leptopImage from "../../assets/leptop.png";
import gamingConsoleImage from "../../assets/gaming-console.png";
import mobileImage from "../../assets/mobile.png";
import earbudsImage from "../../assets/earbuds.png";
import watchImage from "../../assets/smart-watch.png";
import headphonesImage from "../../assets/headphones.png";

const CategorySection = () => {
  return (
    <>
      <section className="xl:px-14 px-4 py-6 xl:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2  xl:gap-8">
          <div className="col-span-2 relative">
            <div className="bg-[#0D0D0D] px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16 rounded-xl ">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Work Smart
              </p>
              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                LAPTOP
              </h1>

              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <p className="xl:w-[72%] w-[70%] text-[8px] xl:text-[16px] text-white mt-4">
                Powerful performance meets sleek design. Perfect for work,
                gaming, and everything in between. Stay productive and
                entertained with unmatched speed and style."
              </p>

              <img
                className="absolute xl:w-auto  w-[160px] bottom-0 -right-4 xl:-right-8"
                src={leptopImage}
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 xl:h-[328px] relative">
            <div className="bg-[#0D0D0D]  px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16  rounded-xl h-full">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Play Hard
              </p>
              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                GAMING
              </h1>

              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <img
                className="absolute xl:w-auto w-[140px] bottom-0 right-0"
                src={gamingConsoleImage}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 h-[179px] xl:h-[328px] relative">
            <div className="bg-[#0D0D0D]  px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16 rounded-xl h-full">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Stay Connected
              </p>

              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                MOBILE
              </h1>
              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <img
                className="absolute xl:w-auto w-[85px] bottom-0 right-0"
                src={mobileImage}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-2 gap-2">
          <div className="col-span-1 h-[179px] xl:h-[328px] relative">
            <div className="bg-[#0D0D0D]   px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16  rounded-xl h-full">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Pure Sound
              </p>

              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                EARBUDS
              </h1>

              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <img
                className="absolute xl:w-auto w-[100px] bottom-0 right-0"
                src={earbudsImage}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1  h-[179px] xl:h-[328px] relative">
            <div className="bg-[#0D0D0D] px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16   rounded-xl h-full">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Smart Time
              </p>

              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                WATCH
              </h1>

              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <img
                className="absolute xl:w-auto w-[105px] -bottom-2 xl:-bottom-5 -right-3"
                src={watchImage}
                alt=""
              />
            </div>
          </div>

          <div className="col-span-2 h-[179px] xl:h-[328px] relative">
            <div className="bg-[#0D0D0D] h-full  px-4 xl:px-6 pt-4 xl:pt-6 pb-8 xl:pb-16 rounded-xl ">
              <p className="text-[#eee] text-[10px] xl:text-[18px]">
                Deep Bass
              </p>

              <h1 className="xl:text-[52px] text-[26px] text-[#eee] opacity-70 categoryHeading">
                HEADPHONES
              </h1>

              <Link className="text-[#eee] text-[10px] xl:text-[15px]  bg-[var(--primary-color)] px-4 xl:px-8 xl:py-[8px] py-[4px] rounded-full  inline-block  -mt-2">
                View All
              </Link>

              <p className="xl:w-[72%] w-[70%] text-[8px] xl:text-[16px] text-white mt-4">
                Experience immersive sound with deep bass and crystal-clear
                clarity — built for true music lovers. Take every beat with you,
                whether at home, work, or on the go.
              </p>

              <img
                className="absolute xl:w-auto w-[110px] bottom-0 -right-1 xl:-right-0"
                src={headphonesImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
