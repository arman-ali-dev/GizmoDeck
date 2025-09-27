import React, { useState } from "react";
import Sidebar from "../components/UserDashboard/Sidebar/Sidebar";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const UserDashboardLayout = ({ children }) => {
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="xl:px-14 px-4 xl:py-[80px] py-[20px]">
        {/* Breadcrumb */}
        <div
          role="presentation"
          className="xl:mb-12 mb-6 flex items-center justify-between"
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
              {location.pathname.split("/")[2]}
            </span>
          </Breadcrumbs>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <IconButton
              onClick={() => setOpenSidebar(!openSidebar)}
              sx={{
                border: "1px solid #afafaf",
                borderRadius: "8px",
                padding: "6px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        <div className="xl:flex gap-16">
          {/* Sidebar */}

          <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

          {/* Content */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
