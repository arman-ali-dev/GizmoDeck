import React from "react";
import Wishlist from "../../components/UserDashboard/Wishlist/Wishlist";

const Wishlists = () => {
  return (
    <>
      <section>
        <div>
          <h2 className="lg:text-[22px] md:text-[18px] text-[15px] font-medium">
            Wishlist
          </h2>
        </div>

        <div>
          <Wishlist />
          <Wishlist />
          <Wishlist />
          <Wishlist />
          <Wishlist />
        </div>
      </section>
    </>
  );
};

export default Wishlists;
