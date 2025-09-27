import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      // agar home page nahi hai to scroll listener ki need nahi
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  return (
    <>
      <header
        className={`fixed px-8 xl:px-14 z-[999]  py-4 flex  justify-between w-full ${
          scrolled ? "bg-[#0E0E0E] shadow-md" : "bg-transparent"
        }`}
      >
        <div>
          <Link to="/" className="logo text-[18px]  xl:text-[26px]">
            Gizmo Deck
          </Link>
        </div>

        <div className="flex gap-16 items-center">
          <form className="hidden md:block">
            <div className="relative">
              <input
                className="bg-white/12 border-none outline-none text-[#eee] rounded-full backdrop-blur-xl px-6 xl:w-[560px] w-[400px] text-[13px] xl:text-[16px] placeholder:text-[#eee] py-[6px] xl:py-[10px]"
                type="text"
                placeholder="Search For Product..."
              />

              <div className="absolute top-[3.5px] xl:top-[7px] right-[3.5px] xl:right-[7px] w-[24px] xl:w-[30px] h-[24px] xl:h-[30px] rounded-full flex justify-center items-center bg-[var(--primary-color)]">
                <SearchIcon
                  sx={{ color: "#eee", fontSize: { sm: 16, xl: 18 } }}
                />
              </div>
            </div>
          </form>

          <div className="flex items-center gap-5 sm:gap-6">
            <Link className="md:hidden" to="/search">
              <SearchIcon
                sx={{
                  color: "#eee",
                  fontSize: { xs: 20, sm: 20, xl: 28 },
                }}
              />
            </Link>

            <Link to="/cart">
              <ShoppingCartOutlinedIcon
                sx={{
                  color: "#eee",
                  fontSize: { xs: 18, sm: 20, xl: 23 },
                }}
              />
            </Link>

            <Link to="/account/orders">
              <PersonOutlineOutlinedIcon
                sx={{
                  color: "#eee",
                  fontSize: { xs: 20, sm: 23, xl: 25 },
                }}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
