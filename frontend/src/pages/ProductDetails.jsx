import React, { useState } from "react";
import productImage from "../assets/product-smart-watch.png";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from "../components/Product/Product";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveIcon from "@mui/icons-material/Remove";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  return (
    <>
      <section className="lg:py-[150px] pb-[70px] pt-[100px] lg:px-14 px-6">
        <div className="grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="col-span-1 md:flex lg:block xl:flex gap-6 mb-10 lg:mb-0">
            <div className="w-[25%] hidden md:flex lg:hidden xl:flex  gap-10 flex-col justify-between">
              <div className="w-full activeImage relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img className="w-[75px] h-[75px] " src={productImage} alt="" />
              </div>

              <div className="w-full  relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img className="w-[75px] h-[75px] " src={productImage} alt="" />
              </div>
              <div className="w-full  relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img className="w-[75px] h-[75px] " src={productImage} alt="" />
              </div>
            </div>
            <div className="border-[#AFAFAF] h-[300px] md:h-auto lg:h-[300px] xl:h-auto  w-full lg:w-full xl:w-[75%] md:w-[75%] px-16 lg:px-20 flex justify-center items-center rounded-sm border">
              <img className="w-full" src={productImage} alt="" />
            </div>

            <div className="w-full flex md:hidden lg:flex xl:hidden  gap-2  justify-between mt-2">
              <div className="w-full activeImage relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img
                  className="lg:w-[75px] lg:h-[75px] h-[50px] w-[50px]"
                  src={productImage}
                  alt=""
                />
              </div>

              <div className="w-full  relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img
                  className="lg:w-[75px] lg:h-[75px] h-[50px] w-[50px]"
                  src={productImage}
                  alt=""
                />
              </div>
              <div className="w-full  relative rounded-sm cursor-pointer border-[#AFAFAF]  py-4 flex justify-center  border">
                <img
                  className="lg:w-[75px] lg:h-[75px] h-[50px] w-[50px]"
                  src={productImage}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="xl:text-[22px] md:text-[18px] text-[16px] sm:text-[17px]">
              Smart Fitness Band - Heart Rate, Calories & Activity Tracker
              Activity Tracker
            </h2>

            <div className="flex items-center gap-3 mt-1">
              <ul className="flex gap-1">
                {[1, 1, 1, 1].map(() => (
                  <li>
                    <StarIcon
                      sx={{ fontSize: { xs: 17, md: 21 }, color: "yellow" }}
                    />
                  </li>
                ))}
              </ul>
              <h2 className="numText xl:text-[16px] lg:text-[15px] text-[12px]">
                4.0 ( 448 Reviews )
              </h2>
            </div>

            <p className="mt-2 text-[#7E7D7D] md:text-[14px]  xl:text-[16px] text-[10px] sm:text-[11px] font-medium">
              This smart fitness band is designed to help you track and improve
              your health and fitness. It features real-time heart rate
              monitoring (BPM), calorie burn (KCAL), and distance tracking (KM).
              The band also displays workout duration, making it easier to
              manage your exercise sessions. With a sleek display and compact
              design, it is perfect for everyday use.
            </p>

            <div className="lg:mt-4 mt-2 flex gap-3 items-end">
              <p className="numText xl:text-[22px] md:text-[20px] text-[18px]">
                ₹ 49999
              </p>
              <del className="numText text-[#9D9C9C] md:text-[17px] xl:text-[18px] text-[16px]">
                ₹ 52999
              </del>
            </div>

            <div className="flex lg:gap-6 gap-2 mt-4 lg:mt-6">
              <div className="border text-[#AFAFAF] rounded-sm flex-1 md:flex-none lg:flex-1 xl:flex-none  w-full md:w-[25%] lg:w-gull xl:w-[25%]">
                <div className="flex justify-between ">
                  <button className="border-[#afafaf] border-r cursor-pointer px-4 py-1.5 md:py-2">
                    <AddIcon
                      sx={{ color: "#000", fontSize: { xs: 12, md: 16 } }}
                    />
                  </button>

                  <span className="px-4 numText text-black text-[13px]  flex justify-center items-center font-semibold ">
                    1
                  </span>
                  <button className="border-[#afafaf] border-l cursor-pointer px-4">
                    <RemoveIcon
                      sx={{
                        color: "#000",
                        fontSize: { xs: 12, md: 16 },
                      }}
                    />
                  </button>
                </div>
              </div>

              <div className="flex-1 md:flex-none lg:flex-1 xl:flex-1">
                <Button
                  className="w-full"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#ff4545",
                    paddingX: { xs: 5, md: 6 },
                    paddingY: 1,
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <span className="font-medium text-[12px] sm:text-[13px] md:text-[15px]">
                    Add To Cart
                  </span>
                </Button>
              </div>
            </div>
            <div className="lg:mt-11 mt-3">
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
                <span className="font-medium text-[12px] sm:text-[13px] md:text-[16px]">
                  Purchase
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-14 px-6">
        <div className="border-[#AFAFAF] border-b-2">
          <ul className="flex lg:justify-start justify-between lg:gap-32">
            <li
              onClick={() => setActiveTab("details")}
              className={`cursor-pointer  text-[#9D9C9C] ${
                activeTab == "details" && "activeTab"
              }`}
            >
              <span className="font-medium  uppercase text-[12px] lg:text-[14px] ">
                Details
              </span>
            </li>
            <li
              onClick={() => setActiveTab("specification")}
              className={`cursor-pointer  text-[#9D9C9C] ${
                activeTab == "specification" && "activeTab"
              }`}
            >
              <span className="font-medium uppercase text-[12px] lg:text-[14px] ">
                Specification
              </span>
            </li>
            <li
              onClick={() => setActiveTab("reviews")}
              className={`cursor-pointer  text-[#9D9C9C] ${
                activeTab == "reviews" && "activeTab"
              }`}
            >
              <span className="font-medium  uppercase text-[12px] lg:text-[14px] ">
                reviews
              </span>
            </li>
          </ul>
        </div>

        {activeTab == "details" ? (
          <div className="mt-5">
            <p className="lg:text-[20px] text-[12px]">
              This stylish smartwatch keeps you connected and on track
              throughout the day. With fitness tracking, smart notifications,
              and a sleek design, With fitness tracking, With fitness tracking,
              it’s built to match your lifestyle.
            </p>

            <ul className="lg:mt-4 mt-3 list-disc pl-5 text-[11px] lg:text-[17px]">
              <li>Sleek, modern design for everyday wear</li>
              <li>Fitness & health tracking (steps, heart rate, sleep)</li>
              <li>Smart notifications for calls, messages, and apps</li>
              <li>Water-resistant build, perfect for workouts</li>
              <li>Long-lasting battery for all-day use</li>
              <li>Sleek, modern design for everyday wear</li>
            </ul>

            <p className="lg:mt-4 mt-3 text-[11px] lg:text-[17px]">
              Perfect for fitness enthusiasts, working professionals, and
              tech-savvy users.
            </p>
          </div>
        ) : activeTab == "specification" ? (
          <div className="mt-5">
            <h2 className="lg:text-[22px] text-[15px] font-medium">
              Technical Skills
            </h2>

            <div className="lg:flex gap-10 mt-5">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: { xs: "100%", md: 500 } }}
                  aria-label="custom pagination table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Brand
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Gizmo Deck
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Model
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        SmartWatch X200
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Release Date
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Aug 2025
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Colors Available
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Black, Silver, Rose Gold
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className="hidden lg:block" component={Paper}>
                <Table
                  sx={{ minWidth: { xs: "100%", md: 500 } }}
                  aria-label="custom pagination table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Brand
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Gizmo Deck
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Model
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        SmartWatch X200
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Release Date
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Aug 2025
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Colors Available
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        Black, Silver, Rose Gold
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <h2 className="lg:text-[22px] md:text-[18px] text-[15px] font-medium">
              Customer Reviews
            </h2>

            <div class="grid lg:grid-cols-3 lg:gap-14 gap-10 mt-2">
              <div class="col-span-1">
                <div class="flex gap-4 mb-5 mt-5 items-center">
                  <ul class="flex gap-1">
                    <li>
                      <StarIcon
                        sx={{ color: "#F1CB33", fontSize: { xs: 17, md: 19 } }}
                      />
                    </li>
                    <li>
                      <StarIcon
                        sx={{ color: "#F1CB33", fontSize: { xs: 17, md: 19 } }}
                      />
                    </li>
                    <li>
                      <StarIcon
                        sx={{ color: "#F1CB33", fontSize: { xs: 17, md: 19 } }}
                      />
                    </li>
                    <li>
                      <StarIcon
                        sx={{ color: "#F1CB33", fontSize: { xs: 17, md: 19 } }}
                      />
                    </li>
                    <li>
                      <StarIcon
                        sx={{ color: "#D3D3D3", fontSize: { xs: 17, md: 19 } }}
                      />
                    </li>
                  </ul>

                  <h3 class="text-[12px] lg:text-[16px] numText">
                    4.0 out of 5
                  </h3>
                </div>

                <div class="w-full">
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <span class="lg:text-sm font-semibold numText">5</span>
                      <div class="relative w-full h-2 bg-gray-200 rounded-full">
                        <div class="absolute w-[20%] left-0 top-0 h-2 bg-[var(--primary-color)] rounded-full"></div>
                      </div>
                      <span class="text-sm text-gray-500 numText">20%</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-semibold numText">4</span>
                      <div class="relative w-full h-2 bg-gray-200 rounded-full">
                        <div class="absolute w-[85%] left-0 top-0 h-2 bg-[var(--primary-color)] rounded-full"></div>
                      </div>
                      <span class="text-sm text-gray-500 numText">85%</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-semibold numText">3</span>
                      <div class="relative w-full h-2 bg-gray-200 rounded-full">
                        <div class="absolute w-[70%] left-0 top-0 h-2 bg-[var(--primary-color)] rounded-full"></div>
                      </div>
                      <span class="text-sm text-gray-500 numText">70%</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-semibold numText">2</span>
                      <div class="relative w-full h-2 bg-gray-200 rounded-full">
                        <div class="absolute w-[40%] left-0 top-0 h-2 bg-[var(--primary-color)] rounded-full"></div>
                      </div>
                      <span class="text-sm text-gray-500 numText">40%</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-semibold numText">1</span>
                      <div class="relative w-full h-2 bg-gray-200 rounded-full">
                        <div class="absolute w-[20%] left-0 top-0 h-2 bg-[var(--primary-color)] rounded-full"></div>
                      </div>
                      <span class="text-sm text-gray-500 numText">20%</span>
                    </div>
                  </div>

                  <div class="mt-6">
                    <Button class="w-full md:text-[16px] text-[14px] bg-[var(--primary-color)] text-white cursor-pointer font-medium py-3 rounded-md transition">
                      Write a review
                    </Button>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-2 space-y-6">
                <h2 class="text-xl font-semibold numText">154 comments</h2>

                <div class="flex space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Jenny Osborn"
                    class="lg:w-12 lg:h-12 w-10 h-10 rounded-full"
                  />
                  <div>
                    <div class="flex items-center space-x-2">
                      <h3 class="font-semibold lg:text-[16px] text-[13px]">
                        Jenny Osborn
                      </h3>
                      <span class="text-yellow-500 md:text-sm text-[12px] numText">
                        ★ 5/5
                      </span>
                    </div>
                    <p class="md:text-sm  text-[10px] sm:text-[12px] text-gray-700 mt-1">
                      I recently purchased the SkyLuxe Wireless Headphones and
                      am absolutely blown away by the experience! From the
                      moment I unboxed them, I could tell they were built with
                      top-notch quality.
                    </p>
                    <div class="flex items-center text-xs text-gray-500 mt-2 space-x-4">
                      <span className="md:text-[16px] text-[12px]">
                        <span className="numText">5</span> days ago
                      </span>
                      <button className="cursor-pointer lg:text-[16px] text-[12px]">
                        <ThumbUpIcon
                          sx={{
                            fontSize: { xs: 12, md: 14 },
                            marginRight: 0.5,
                          }}
                        />{" "}
                        Like
                      </button>
                      <button className="cursor-pointer md:text-[16px] text-[12px]">
                        <ChatBubbleIcon
                          sx={{
                            fontSize: { xs: 12, md: 14 },
                            marginRight: 0.5,
                          }}
                        />{" "}
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="Mikhel Aretra"
                    class="lg:w-12 lg:h-12 w-10 h-10 rounded-full"
                  />
                  <div>
                    <div class="flex items-center space-x-2">
                      <h3 class="font-semibold md:text-[16px] text-[13px]">
                        Mikhel Aretra
                      </h3>

                      <span class="text-yellow-500 lg:text-sm text-[12px] numText">
                        ★ 4/5
                      </span>
                    </div>

                    <p class="md:text-sm  text-[10px] sm:text-[12px] text-gray-700 mt-1">
                      The SkyLuxe Wireless Headphones are a game-changer! The
                      moment I put them on, I was completely immersed in the
                      sound. The craftsmanship is evident in every detail, and
                      they’re super comfortable for long listening sessions.
                    </p>
                    <div class="flex items-center text-xs text-gray-500 mt-2 space-x-4">
                      <span className="lg:text-[16px] text-[12px]">
                        <span className="numText">5</span> days ago
                      </span>
                      <button className="cursor-pointer">
                        <ThumbUpIcon
                          sx={{
                            fontSize: { xs: 12, md: 14 },
                            marginRight: 0.5,
                          }}
                        />{" "}
                        Like
                      </button>
                      <button className="cursor-pointer">
                        <ChatBubbleIcon
                          sx={{
                            fontSize: { xs: 12, md: 14 },
                            marginRight: 0.5,
                          }}
                        />{" "}
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Jose Mourinho"
                    class="lg:w-12 lg:h-12 w-10 h-10 rounded-full"
                  />
                  <div>
                    <div class="flex items-center space-x-2">
                      <h3 class="font-semibold md:text-[16px] text-[13px]">
                        Jose Mourinho
                      </h3>

                      <span class="text-yellow-500 md:text-sm text-[12px] numText">
                        ★ 1/5
                      </span>
                    </div>

                    <p class="lg:text-sm  text-[10px] md:text-[12px] text-gray-700 mt-1">
                      SkyLuxe nailed it with these headphones! The unboxing
                      alone felt premium, and using them has been even better.
                      The sound quality is incredibly crisp, with deep bass that
                      makes every beat feel alive. The noise-canceling feature
                      works wonders too!
                    </p>
                    <div class="flex items-center text-xs text-gray-500 mt-2 space-x-4">
                      <span className="lg:text-[16px] text-[12px]">
                        <span className="numText">5</span> days ago
                      </span>
                      <button className="cursor-pointer">
                        <ThumbUpIcon sx={{ fontSize: 14, marginRight: 0.5 }} />{" "}
                        Like
                      </button>
                      <button className="cursor-pointer">
                        <ChatBubbleIcon
                          sx={{ fontSize: 14, marginRight: 0.5 }}
                        />{" "}
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="lg:pl-14 pl-4 py-8 md:py-10">
        <div>
          <h2 className="font-semibold lg:text-[22px] md:text-[18px] text-[17px] heading relative inline-block">
            You May Also Like
          </h2>

          {/* Swiper Slider */}
          <div className="mt-10">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3.7}
              loop={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  // mobile
                  slidesPerView: 1.8,
                  spaceBetween: 10,
                },
                480: {
                  // small devices
                  slidesPerView: 1.7,
                  spaceBetween: 12,
                },
                768: {
                  // tablets
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
                1024: {
                  // desktops
                  slidesPerView: 3.2,
                  spaceBetween: 18,
                },
                1280: {
                  // large desktops
                  slidesPerView: 3.7,
                  spaceBetween: 20,
                },
              }}
            >
              {[1, 1, 1, 1, 1].map((item, index) => (
                <SwiperSlide key={index}>
                  <Product />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Swiper Slider */}
          <div className="lg:mt-10 mt-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3.7}
              loop={true}
              grabCursor={true}
              breakpoints={{
                320: {
                  // mobile
                  slidesPerView: 1.8,
                  spaceBetween: 10,
                },
                480: {
                  // small devices
                  slidesPerView: 1.7,
                  spaceBetween: 12,
                },
                768: {
                  // tablets
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
                1024: {
                  // desktops
                  slidesPerView: 3.2,
                  spaceBetween: 18,
                },
                1280: {
                  // large desktops
                  slidesPerView: 3.7,
                  spaceBetween: 20,
                },
              }}
            >
              {[1, 1, 1, 1, 1].map((item, index) => (
                <SwiperSlide key={index}>
                  <Product />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
