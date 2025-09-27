import React from "react";
import CartProduct from "../components/Cart/CartProduct";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <>
      <section className="lg:py-[50px] py-[50px] px-4 lg:px-14">
        {/* Breadcrumb */}
        <div
          role="presentation"
          className="xl:mb-12 mb-6 "
          onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              className="font-medium xl:text-[16px] text-[14px]"
              underline="hover"
              color="inherit"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium xl:text-[16px] text-[14px]"
              underline="hover"
              color="inherit"
              to="/account"
            >
              Account
            </Link>
            <span className="font-medium xl:text-[16px] text-[14px] text-[var(--primary-color)] capitalize">
              cart
            </span>
          </Breadcrumbs>
        </div>
        <div>
          <h2 className="font-semibold text-[16px] lg:text-[22px] heading relative inline-block">
            Shopping Cart
          </h2>
        </div>

        <div className="grid mt-10 grid-cols-1 lg:grid-cols-4 lg:gap-4 ">
          <div className="col-span-3  lg:py-8 py-4 px-4 lg:pr-0 lg:pl-7 border-[#AFAFAF] border rounded-[28px]">
            <div className="lg:grid grid-cols-5 hidden">
              <div className="col-span-2">
                <h2 className="lg:text-[20px] text-[15px] font-medium">
                  Product
                </h2>
              </div>

              <div className="text-center">
                <h2 className="text-[20px] font-medium">Quantity</h2>
              </div>

              <div className="text-center">
                <h2 className="text-[20px] font-medium">Total</h2>
              </div>

              <div className="text-center">
                <h2 className="text-[20px] font-medium">Action</h2>
              </div>
            </div>

            <CartProduct />

            <span className="bg-[#afafaf] h-[1px] w-full inline-block lg:hidden"></span>

            <CartProduct />

            <span className="bg-[#afafaf] h-[1px] w-full inline-block lg:hidden"></span>

            <CartProduct />

            <span className="bg-[#afafaf] h-[1px] w-full inline-block lg:hidden"></span>

            <CartProduct />
          </div>

          <div className="col-span-1 w-full py-6 lg:py-8 px-5 mt-5 lg:mt-0 border-[#AFAFAF]  border rounded-[28px]">
            <h2 className="font-medium text-[17px] lg:text-[20px]">
              Order Summary
            </h2>

            <form className="flex gap-2 mt-3">
              <input
                type="text"
                placeholder="Discount Voucher"
                className="border-[#AFAFAF] lg:text-[16px] text-[14px] w-[85%] border px-5 py-1.5 rounded-full"
              />

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff4545",
                  paddingX: "20px",

                  borderRadius: "50px",
                }}
              >
                <span className="font-medium text-[13px] lg:text-[15px]">
                  Apply
                </span>
              </Button>
            </form>

            <div className="mt-7 border-[#afafaf] border-b pb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[#7E7D7D] text-[15px] lg:text-[16px] font-medium">
                  Total:
                </h2>
                <p className="text-[15px] lg:text-[16px] font-medium numText">
                  ₹ 49999
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-[#7E7D7D] text-[15px] lg:text-[16px] font-medium">
                  Discount ( 10% )
                </h2>
                <p className="text-[15px] lg:text-[16px] font-medium numText">
                  - ₹ 9999
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-[#7E7D7D] text-[15px] lg:text-[16px] font-medium">
                  Delivery Fee
                </h2>
                <p className="text-[15px] lg:text-[16px] font-medium numText">
                  ₹ 100
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff4545",
                  paddingY: 1,
                  borderRadius: "50px",
                }}
              >
                <span className="font-medium text-[15px] lg:text-[16px]">
                  Checkout
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
