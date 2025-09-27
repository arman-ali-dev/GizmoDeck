import React from "react";
import Product from "./Product";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductSection = () => {
  return (
    <section className="xl:pl-14 pl-4 py-8 xl:py-10">
      <div>
        <h2 className="font-semibold xl:text-[22px] md:text-[18px] text-[17px] heading relative inline-block">
          Top Products
        </h2>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3.7}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: {
                // mobile
                slidesPerView: 1.8,
                spaceBetween: 10,
              },
              480: {
                // small devices
                slidesPerView: 1.7,
                spaceBetween: 12,
              },
              768: {
                // tablets
                slidesPerView: 3.3,
                spaceBetween: 15,
              },

              1280: {
                // large desktops
                slidesPerView: 3.7,
                spaceBetween: 20,
              },
            }}
          >
            {[1, 1, 1, 1, 1].map((item, index) => (
              <SwiperSlide key={index}>
                <Product />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper Slider */}
        <div className="xl:mt-10 mt-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3.7}
            loop={true}
            grabCursor={true}
            breakpoints={{
              320: {
                // mobile
                slidesPerView: 1.8,
                spaceBetween: 10,
              },
              480: {
                // small devices
                slidesPerView: 1.7,
                spaceBetween: 12,
              },
              768: {
                // tablets
                slidesPerView: 3.3,
                spaceBetween: 15,
              },

              1280: {
                // large desktops
                slidesPerView: 3.7,
                spaceBetween: 20,
              },
            }}
          >
            {[1, 1, 1, 1, 1].map((item, index) => (
              <SwiperSlide key={index}>
                <Product />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
