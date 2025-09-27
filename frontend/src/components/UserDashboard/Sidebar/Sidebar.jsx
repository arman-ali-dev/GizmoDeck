import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Orders", path: "/account/orders" },
  { label: "Wishlist", path: "/account/wishlists" },
  { label: "Manage Address", path: "/account/manage-address" },
  { label: "Help & Support", path: "/account/help-and-support" },
  { label: "Offers & Deals", path: "/account/offers-and-deals" },
];

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [activeTab, setActiveTab] = useState("Orders");
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden xl:block xl:w-[21%] pr-10 border-[#AFAFAF] border-r">
        <ul className="space-y-9">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Button
                onClick={() => {
                  navigate(item.path);
                  setActiveTab(item.label);
                }}
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  backgroundColor:
                    activeTab === item.label ? "#ff4545" : "transparent",
                  fontSize: 18,
                  color: activeTab === item.label ? "white" : "black",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  paddingX: 6,
                  paddingY: 1,
                }}
              >
                <span className="font-medium">{item.label}</span>
              </Button>
            </li>
          ))}

          <li>
            <Button
              fullWidth
              sx={{
                textTransform: "capitalize",
                fontSize: 18,
                color: "black",
                textAlign: "left",
                justifyContent: "flex-start",
                paddingX: 6,
                paddingY: 1,
              }}
              className="flex items-end gap-2"
            >
              <LogoutIcon sx={{ fontSize: 20 }} />
              <span className="font-medium">Logout</span>
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar (Overlay Drawer Style) */}
      {openSidebar && (
        <div className="xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 shadow-xl p-6 overflow-y-auto transition-transform duration-300">
          {/* Cross Button */}
          <div className="flex justify-end mb-6">
            <IconButton
              onClick={() => setOpenSidebar(false)}
              sx={{ border: "1px solid #afafaf" }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <ul className="space-y-9">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Button
                  onClick={() => {
                    console.log("Hello World");

                    navigate(item.path);
                    setActiveTab(item.label);
                    setOpenSidebar(false); // close sidebar after click
                  }}
                  fullWidth
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor:
                      activeTab === item.label ? "#ff4545" : "transparent",
                    fontSize: { xs: 15, md: 18 },
                    color: activeTab === item.label ? "white" : "black",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    paddingX: 6,
                    paddingY: 1,
                  }}
                >
                  <span className="font-medium">{item.label}</span>
                </Button>
              </li>
            ))}

            <li>
              <Button
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: 15, md: 18 },

                  color: "black",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  paddingX: 6,
                  paddingY: 1,
                }}
                className="flex items-end gap-2"
              >
                <LogoutIcon sx={{ fontSize: 20 }} />
                <span className="font-medium">Logout</span>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
