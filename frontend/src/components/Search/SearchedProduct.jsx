import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../assets/product-smart-watch.png";

const SearchedProduct = () => {
  return (
    <>
      <div>
        <Link to="/product-details" className="flex gap-4 items-center py-4">
          <img className="w-[45px]" src={ProductImage} alt="" />
          <p className="text-[12px]">
            Smart Fitness Band - Heart Rate, Calories & Activity Tracker
          </p>
        </Link>

        <div className="bg-[#e2dddd] h-[1px] w-full "></div>
      </div>
    </>
  );
};

export default SearchedProduct;
