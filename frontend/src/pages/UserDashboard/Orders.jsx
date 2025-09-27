import { Button } from "@mui/material";
import React from "react";
import Order from "../../components/UserDashboard/Orders/Order";

const Orders = () => {
  return (
    <>
      <section>
        <div>
          <h2 className="lg:text-[22px] md:text-[18px] text-[15px] font-medium">
            My Orders
          </h2>
        </div>

        <div className="border-b border-[#AFAFAF] pb-4">
          <div className="lg:mt-4 mt-2 lg:flex space-y-2  justify-between w-full">
            <div className="flex gap-2 lg:block">
              <h4 className="text-[#828282] text-[13px] lg:text-[17px] font-medium">
                Order Date
              </h4>
              <p className="numText font-medium text-[12px] lg:text-[16px]">
                10-May-2024
              </p>
            </div>

            <div className="flex gap-2 lg:block">
              <h4 className="text-[#828282] text-[13px] lg:text-[17px]  font-medium">
                Total Amount
              </h4>
              <p className="numText font-medium text-[12px] lg:text-[16px]">
                Rs. 720.00
              </p>
            </div>

            <div className="flex gap-2 lg:block">
              <h4 className="text-[#828282] text-[13px] lg:text-[17px]  font-medium">
                Order Address:
              </h4>
              <p className="numText font-medium text-[12px] lg:text-[16px]">
                Sector-B, Murlipura, Jaipur
              </p>
            </div>

            <div className="flex gap-1">
              <h4 className="text-[#828282] text-[13px] lg:text-[17px]  font-medium">
                Order ID:
              </h4>
              <p className="numText font-medium text-[12px] lg:text-[16px]">
                DFTGGF234324
              </p>
            </div>
          </div>

          <div className="flex lg:justify-end mt-3 lg:mt-0">
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#ff4545",
                paddingX: { xs: 3, md: 4 },
              }}
            >
              <span className="font-medium text-[11px] lg:text-[14px]">
                Track Order
              </span>
            </Button>
          </div>
        </div>

        <div className="border-b border-[#AFAFAF] py-8">
          <h3 className="font-medium text-[16px] lg:text-[18px]">
            Delivered To : <span className="numText">12</span> May
          </h3>
          <Order />
          <Order />
        </div>
        <div className="lg:py-6 py-4 flex justify-between">
          <h2 className="font-semibold text-[17px] lg:text-[20px]">Total:</h2>
          <h2 className="font-semibold text-[17px] lg:text-[20px]">
            Rs. <span className="numText">1440.00</span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Orders;
