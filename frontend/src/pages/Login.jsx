import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      const res = await axios.post("http://localhost:8080/api/auth/login", {
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

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Email
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                className="border-[#AFAFAF] px-4 block w-full py-2 border rounded-sm"
              />
            </div>

            <div className="mt-4">
              <label className="text-[#9D9C9C] lg:text-[16px] text-[14px]">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="text"
                className="border-[#AFAFAF] block px-4 w-full py-2 border rounded-sm"
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
                    "Login"
                  )}
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
