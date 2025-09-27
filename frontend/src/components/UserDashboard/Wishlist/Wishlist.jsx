import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton } from "@mui/material";
import ProductImage from "../../../assets/product-smart-watch.png";

const Wishlist = () => {
  return (
    <>
      <div className="grid grid-cols-3  lg:grid-cols-5 mt-5 items-center">
        <div className="lg:col-span-2 col-span-3 flex gap-3 items-center">
          <div>
            <IconButton>
              <ClearIcon />
            </IconButton>
          </div>

          <div className="flex gap-4 items-center ">
            <img className="lg:w-[70px] w-[55px]" src={ProductImage} alt="" />
            <p className="lg:text-[16px] text-[13px]">
              Smart Fitness Band - Heart Rate, Calories & Activity Tracker
            </p>
          </div>
        </div>

        <div className="lg:text-center mt-3 lg:mt-0">
          <h2 className="text-medium text-[13px] lg:text-[19px]">
            Rs. <span className="numText">720.00</span>
          </h2>
        </div>

        <div className="lg:text-center mt-3 lg:mt-0">
          <span className="bg-[#A8E7B0] text-[10px] lg:text-[16px] text-[#189727] px-4 lg:px-6 inline-block py-1 lg:py-2 rounded-lg">
            In Stock
          </span>
        </div>

        <div className="lg:text-center mt-3 lg:mt-0">
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#ff4545",
              paddingX: { xs: 2, md: 5 },
              paddingY: { xs: 0.5, md: 1 },
            }}
          >
            <span className="font-medium text-[11px] lg:text-[16px]">
              Add To Cart
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
