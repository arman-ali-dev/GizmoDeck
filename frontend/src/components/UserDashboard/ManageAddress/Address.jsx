import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <>
      <div className="lg:px-8 px-4 py-4 lg:py-7 border-[#afafaf] rounded-lg border">
        <p className="lg:text-[20px] text-[12px]">
          Flat 302, Green Valley Residency, Sector 12, Dwarka, New Delhi, Near
          Metro Station, Opposite Central Mall Pin Code 110078, India, Close to
          Airport Road, Facing Park View Apartments, Adjacent to Community
          Health Centre
        </p>

        <div className="lg:mt-5 mt-4 flex gap-6 lg:gap-10">
          <Link
            to="/account/edit-address"
            style={{ color: "#ff4545" }}
            className=" text-[12px] lg:text-[16px] inline-block  cursor-pointer text-[var(--primary-color)]"
          >
            Edit
          </Link>
          <button className="text-[var(--primary-color)] text-[12px] lg:text-[16px] cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;
