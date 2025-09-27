import { Button } from "@mui/material";
import React from "react";

const AddAddress = () => {
  return (
    <>
      <section>
        <div>
          <h2 className="lg:text-[22px] text-[15px] font-medium">
            Add Address
          </h2>
        </div>

        <form className="mt-5">
          <div>
            <label className="lg:text-[17px] text-[13px] font-medium">
              County
            </label>
            <input
              type="text"
              className="border-[#afafaf] py-1.5 lg:py-2 outline-0 mt-0.5 border rounded-lg block w-full px-4 "
            />
          </div>

          <div className="lg:mt-7 mt-3">
            <label className="lg:text-[17px] text-[13px] font-medium">
              Apartment(Optional)
            </label>
            <input
              type="text"
              className="border-[#afafaf] mt-0.5 border rounded-lg block w-full px-4 py-1.5 lg:py-2"
            />
          </div>

          <div className="lg:mt-7 mt-3">
            <label className="lg:text-[17px] text-[13px] font-medium">
              Address
            </label>
            <input
              type="text"
              className="border-[#afafaf] mt-0.5 border rounded-lg block w-full px-4 py-1.5 lg:py-2"
            />
          </div>

          <div className="lg:flex lg:mt-7 mt-3 gap-10">
            <div className="flex-1">
              <label className="lg:text-[17px] text-[13px] font-medium">
                State
              </label>
              <input
                type="text"
                className="border-[#afafaf] mt-0.5 border rounded-lg block w-full px-4 py-1.5 lg:py-2"
              />
            </div>

            <div className="flex-1  mt-3 lg:mt-0">
              <label className="lg:text-[17px] text-[13px] font-medium">
                City
              </label>
              <input
                type="text"
                className="border-[#afafaf] mt-0.5 border rounded-lg block w-full px-4 py-1.5 lg:py-2"
              />
            </div>

            <div className="flex-1 mt-3 lg:mt-0">
              <label className="lg:text-[17px] text-[13px] font-medium">
                Pin Code
              </label>
              <input
                type="text"
                className="border-[#afafaf] mt-0.5 border rounded-lg block w-full px-4 py-1.5 lg:py-2"
              />
            </div>
          </div>

          <div className="lg:mt-10 mt-5">
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#ff4545",
                paddingX: { xs: 3, md: 4 },
                paddingY: { xs: 0.5, md: 1 },
              }}
            >
              <span className="font-medium text-[13px] lg:text-[16px]">
                Add
              </span>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddAddress;
