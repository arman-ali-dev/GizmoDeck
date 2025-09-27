import React from "react";
import ProductImage from "../../assets/product-smart-watch.png";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = () => {
  return (
    <>
      <div className="grid mt-5 items-center grid-cols-3 lg:grid-cols-5">
        <div className="flex gap-4 items-center col-span-3 lg:col-span-2">
          <img className="lg:w-[70px] w-[60px]" src={ProductImage} alt="" />
          <p className="text-[14px] lg:text-[16px]">
            Smart Fitness Band - Heart Rate, Calories & Activity Tracker
          </p>
        </div>

        <div className="border text-[#AFAFAF] mt-3 lg:mt-0  rounded-full w-full lg:w-[80%] mx-auto">
          <div className="flex justify-between ">
            <button className="border-[#afafaf] border-r cursor-pointer px-3 lg:px-4 py-1 lg:py-1.5">
              <AddIcon sx={{ color: "#000", fontSize: { xs: 14, md: 16 } }} />
            </button>

            <span className="px-4 numText text-black text-[15px]  flex justify-center items-center font-semibold ">
              1
            </span>
            <button className="border-[#afafaf] border-l cursor-pointer px-3 lg:px-4">
              <RemoveIcon
                sx={{ color: "#000", fontSize: { xs: 14, md: 16 } }}
              />
            </button>
          </div>
        </div>

        <div className="text-center mt-3 lg:mt-0">
          <h2 className="font-medium text-[15px] lg:text-[20px] numText">
            ₹ 49999
          </h2>
        </div>

        <div className="text-center mt-3 lg:mt-0">
          <IconButton>
            <DeleteForeverOutlinedIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
