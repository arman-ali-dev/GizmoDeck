import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", {
        ...formData,
      });

      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message, { autoClose: 1500 });

        navigate("/");
      } else {
        toast.error(res.data.message, { autoClose: 1500 }); // error toast
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong", {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="lg:pt-[75px] pt-[40px] px-4 lg:px-0 lg:flex justify-center">
        <div className="lg:w-[400px] w-full">
          <div className="text-center">
            <h2 className="font-semibold text-[20px] lg:text-[26px]">
              Create Account
            </h2>
          </div>

          {/* Google Auth button (future use) */}
          <div className="w-full cursor-pointer flex bg-[#f7f3f3] mt-6 lg:mt-10 py-3 rounded-sm justify-center items-center gap-2">
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

          <form className="mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border-[#AFAFAF] block w-full py-1.5 lg:py-2 border rounded-sm px-2"
              />
            </div>

            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-[#AFAFAF] block w-full py-1.5 lg:py-2 border rounded-sm px-2"
              />
            </div>

            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border-[#AFAFAF] block w-full py-1.5 lg:py-2 border rounded-sm px-2"
              />
            </div>

            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-[#AFAFAF] block w-full py-1.5 lg:py-2 border rounded-sm px-2"
              />
            </div>

            <div className="mt-10">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#ff4545",
                  paddingX: 6,
                  paddingY: 1,
                  height: "40px",
                }}
              >
                <span className="font-medium flex justify-center items-center text-[14px] lg:text-[16px]">
                  {loading ? (
                    <CircularProgress color="white" size="20px" />
                  ) : (
                    "Sign Up"
                  )}
                </span>
              </Button>

              <p className="mt-1 text-[13px] lg:text-[14px]">
                Already Have An Account ?{" "}
                <Link
                  to="/login"
                  className="text-[var(--primary-color)] font-medium"
                >
                  Login Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
