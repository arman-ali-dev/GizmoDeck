import { Button } from "@mui/material";
import React from "react";
import Address from "../../components/UserDashboard/ManageAddress/Address";
import { useNavigate } from "react-router-dom";

const ManageAddress = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div>
          <h2 className="lg:text-[22px] text-[15px] font-medium">
            Manage Address
          </h2>
        </div>
        <div className="lg:mt-8 mt-4">
          <Button
            onClick={() => navigate("/account/add-address")}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#ff4545",
              paddingX: { xs: 3, md: 6 },
              paddingY: { xs: 0.5, md: 1 },
            }}
          >
            <span className="font-medium text-[12px] lg:text-[16px]">
              +Add Address
            </span>
          </Button>
        </div>

        <div className="lg:mt-10 mt-7 space-y-5">
          <Address />
          <Address />
        </div>
      </section>
    </>
  );
};

export default ManageAddress;
