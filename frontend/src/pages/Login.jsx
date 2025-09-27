import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="lg:pt-[75px] pt-[40px] px-4 lg:px-0 lg:flex justify-center">
        <div className="lg:w-[400px] w-full">
          <div className="text-center">
            <h2 className="font-semibold text-[20px] lg:text-[26px]">
              Login Account
            </h2>
          </div>

          <div className="w-full cursor-pointer flex bg-[#f7f3f3] lg:mt-10 mt-6 py-3 rounded-sm justify-center items-center gap-2">
            <img
              className="lg:w-[27px] w-[20px]"
              src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
              alt=""
            />

            <span className="lg:text-[16px] text-[14px] font-medium">
              Continue With Google
            </span>
          </div>

          <div className="flex gap-4 items-center mt-8">
            <span className="flex-1 w-full bg-[#e8e5e5] h-[1px] inline-block"></span>
            <span className="text-[#afafaf] lg:text-[16px] text-[14px]">
              OR
            </span>
            <span className="flex-1 w-full bg-[#e8e5e5] h-[1px] inline-block"></span>
          </div>

          <form className="mt-5">
            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Email
              </label>
              <input
                type="text"
                className="border-[#AFAFAF] block w-full py-2 border rounded-sm"
              />
            </div>

            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Password
              </label>
              <input
                type="text"
                className="border-[#AFAFAF] block w-full py-2 border rounded-sm"
              />
            </div>

            <div className="mt-10">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff4545",
                  paddingX: 6,
                  paddingY: 1,
                }}
              >
                <span className="font-medium lg:text-[16px] text-[14px]">
                  Purchase
                </span>
              </Button>

              <p className="mt-1 text-[13px] lg:text-[14px]">
                No Have Account ?{" "}
                <Link
                  to="/signup"
                  className="text-[var(--primary-color)] font-medium"
                >
                  Signup Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
