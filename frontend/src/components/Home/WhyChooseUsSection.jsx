import React from "react";
import shippingImage from "../../assets/shipping.png";
import guaranteeImage from "../../assets/gurantee.png";
import supportImage from "../../assets/support.png";

const WhyChooseUsSection = () => {
  return (
    <>
      <section className=" py-26 hidden lg:block">
        <div className="grid grid-cols-3 ">
          <div className="col-span-1 justify-center flex gap-3 items-center">
            <div>
              <img className="w-[70px] " src={shippingImage} alt="" />
            </div>

            <div>
              <h3 className="font-semibold m-0 text-[16px] ">Free Shipping</h3>
              <p className="text-[#9D9C9C] font-medium -mt-2 text-[16px] ">
                text text text text
              </p>
            </div>
          </div>

          <div className="col-span-1  justify-center flex gap-4 items-center">
            <div>
              <img className="w-[75px] " src={guaranteeImage} alt="" />
            </div>

            <div>
              <h3 className="font-semibold text-[16px]  m-0">
                Money Guarantee
              </h3>
              <p className="text-[#9D9C9C] text-[16px] font-medium -mt-2">
                text text text text
              </p>
            </div>
          </div>

          <div className="col-span-1 flex gap-5 justify-center items-center">
            <div>
              <img className="w-[50px] " src={supportImage} alt="" />
            </div>

            <div>
              <h3 className="font-semibold text-[16px] m-0">Support 24/7</h3>
              <p className="text-[#9D9C9C] text-[16px] font-medium -mt-2">
                text text text text
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
