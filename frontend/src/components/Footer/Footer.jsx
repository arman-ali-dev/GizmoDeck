import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Link } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0E0E0E]  lg:px-14 px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 py-[40px] lg:py-[100px]">
          <div className="col-span-2">
            <div>
              <h1 className="footer-logo text-[26px] lg:text-[42px]">
                G<span className="text-[var(--primary-color)]">D</span>
              </h1>
            </div>

            <div className="lg:mt-5 mt-3">
              <form>
                <label className="lg:text-[16px] text-[13px] block text-white font-medium">
                  Join Our Newsletter
                </label>

                <div className="mt-4 relative lg:w-[300px]">
                  <input
                    className="lg:text-[15px] text-[12px] border-[#eee] px-6 w-full py-0.5  border-b  placeholder:text-[#eee]"
                    type="text"
                    placeholder="Enter your Email..."
                  />
                  <EmailOutlinedIcon
                    sx={{
                      color: "#eee",
                      fontSize: 17,
                      position: "absolute",
                      left: 2,
                      top: 3,
                    }}
                  />
                  <div className="bg-[var(--primary-color)] top-0 absolute right-0 flex justify-center items-center h-[20px] w-[20px] rounded-full">
                    <EastOutlinedIcon sx={{ color: "#eee", fontSize: 12 }} />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-span-1 mt-8 lg:mt-0">
            <h3 className="font-medium lg:text-[17px] text-[13px] text-white">
              Quick Link
            </h3>

            <ul className="lg:mt-5 mt-3 lg:text-[16px] text-[12px] space-y-2 lg:space-y-4 text-white">
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link>Shop</Link>
              </li>

              <li>
                <Link>Deals & Offers</Link>
              </li>

              <li>
                <Link>Today's Offers</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mt-8 lg:mt-0">
            <h3 className="font-medium lg:text-[17px] text-[13px] text-white">
              Support
            </h3>

            <ul className="lg:mt-5 mt-3 lg:text-[16px] text-[12px] space-y-2 lg:space-y-4 text-white">
              <li>
                <Link>Contact Us</Link>
              </li>

              <li>
                <Link>FAQs</Link>
              </li>

              <li>
                <Link>Shopping Info</Link>
              </li>

              <li>
                <Link>Return Policy</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 col-span-2 mt-8 lg:mt-0">
            <h3 className="font-medium lg:text-[17px] text-[13px] text-white">
              Contact Us
            </h3>

            <ul className="lg:mt-5 mt-3 lg:text-[16px] text-[12px] space-y-2 lg:space-y-4 text-white">
              <li>
                <Link>
                  <PlaceOutlinedIcon sx={{ fontSize: 17 }} /> 123 Maple Street,
                  Springfield
                </Link>
              </li>

              <li>
                <Link>
                  <LocalPhoneIcon sx={{ fontSize: 18 }} /> +91 7665407031
                </Link>
              </li>

              <li>
                <Link>
                  <EmailOutlinedIcon sx={{ fontSize: 17 }} /> arman@gmial.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex justify-between items-center py-[12px] lg:py-[40px] border-[rgba(255,255,255,0.7)] border-t text-center lg:text-left ">
          <p className="lg:text-[17px] mb-2 lg:mb-0 text-[13px] text-[rgba(255,255,255,0.6)]">
            © <span className="numText">2024</span> Copyright{" "}
          </p>

          <ul className="flex lg:justify-start justify-center gap-10 text-[13px] lg:text-[17px] text-[rgba(255,255,255,0.6)]">
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Condition</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
