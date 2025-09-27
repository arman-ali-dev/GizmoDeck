import React from "react";
import ProductImage from "../../../assets/product-smart-watch.png";

const Order = () => {
  return (
    <>
      <div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-5">
          <div className="flex gap-4 justify-center lg:justify-start items-center col-span-3 lg:col-span-2">
            <img className="lg:w-[70px] w-[55px]" src={ProductImage} alt="" />
            <p className="lg:text-[16px] text-[13px] ">
              Smart Fitness Band - Heart Rate, Calories & Activity Tracker
            </p>
          </div>

          <div className="col-span-1 mt-3 lg:mt-0 lg:text-center">
            <h2 className="lg:text-[16px] text-[13px]">
              QTY: <span className="numText text-[14px] lg:text-[18px]">5</span>
            </h2>
          </div>

          <div className="col-span-1  mt-3 lg:mt-0 lg:text-center">
            <h2 className="font-medium text-[15px] lg:text-[18px]">
              Rs. <span className="numText ">720.00</span>
            </h2>
          </div>

          <div className="col-span-1  mt-3 lg:mt-0 lg:text-center">
            <h2 className="font-medium text-[#FF9216] text-[15px] lg:text-[18px]">
              Pending
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
