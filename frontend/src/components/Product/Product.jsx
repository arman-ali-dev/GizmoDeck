import React from "react";
import alexaImage from "../../assets/alexa.png";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate("/product-details")}
        className="border-[#AFAFAF] cursor-pointer xl:py-6 pt-4 pb-3 border rounded-xl"
      >
        <div className="flex justify-center ">
          <img
            className="xl:w-[130px] lg:w-[100px] w-[70px]"
            src={alexaImage}
            alt=""
          />
        </div>

        <div className="xl:px-4 px-2 lg:mt-3 mt-1">
          {/* <div>
            <StarIcon
              sx={{
                color: "yellow",
                fontSize: { xs: 16, sm: 18, md: 25, lg: 18, xl: 25 },
              }}
            />
            <StarIcon
              sx={{
                color: "yellow",
                fontSize: { xs: 16, sm: 18, md: 25, lg: 18, xl: 25 },
              }}
            />
            <StarIcon
              sx={{
                color: "yellow",
                fontSize: { xs: 16, sm: 18, md: 25, lg: 18, xl: 25 },
              }}
            />
            <StarIcon
              sx={{
                color: "yellow",
                fontSize: { xs: 16, sm: 18, md: 25, lg: 18, xl: 25 },
              }}
            />
            <StarIcon
              sx={{
                color: "#ccc",
                fontSize: { xs: 16, sm: 18, md: 25, lg: 18, xl: 25 },
              }}
            />
          </div> */}

          <h2 className="xl:text-[17px] lg:text-[16px] text-[11px] font-semibold">
            Smart Fitness Band - Heart Rate,
          </h2>
          <p className=" lg:text-[12px]  xl:text-[15px] text-[9px]">
            Alexa is a smart voice assistant that lets you play music, smart
            devices...
          </p>

          <p className="numText xl:mt-2 mt-1 text-[14px] xl:text-[20px] font-medium">
            ₹ 49999{" "}
            <del className="numText ml-2 text-[12px] xl:text-[17px] text-[#9d9c9c]">
              ₹ 55999
            </del>
          </p>

          <div className="flex gap-2 xl:mt-3 mt-2">
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "capitalize",
                paddingY: { xs: "7px", md: 1 },
                fontSize: { xs: "10px", md: "16px" },
                backgroundColor: "var(--primary-color)",
              }}
            >
              <span className="font-medium">Add To Cart</span>
            </Button>
            {/* <Button
              fullWidth
              className="!hidden xl:!block"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                paddingY: 1,
                fontSize: "16px",
                backgroundColor: "var(--primary-color)",
              }}
            >
              <span className="font-medium"> Buy Now</span>
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
