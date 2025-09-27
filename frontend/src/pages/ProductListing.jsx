import React, { useState } from "react";
import FilterSidebar from "../components/ProductListing/FilterSidebar";
import Product from "../components/Product/Product";
import { IconButton } from "@mui/material";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

const ProductListing = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main className="xl:py-[150px] relative pt-[100px] pb-[50px] px-6 xl:px-14 xl:flex gap-14">
        <FilterSidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <IconButton
          className="xl:!hidden"
          onClick={() => setShowSidebar(true)}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <SortOutlinedIcon />
        </IconButton>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:gap-5 gap-2 mt-5">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <Product />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductListing;
