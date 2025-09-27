import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import SearchedProduct from "../components/Search/SearchedProduct";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";

const Search = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="py-[10px] px-4">
        <IconButton onClick={() => navigate("/")}>
          <KeyboardBackspaceIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <form className="mt-1">
          <div className="relative">
            <input
              className="bg-black/40 border-none outline-none text-[#eee] rounded-full backdrop-blur-xl px-6 text-[13px] w-full xl:text-[16px] placeholder:text-[#eee] py-[8px]"
              type="text"
              placeholder="Search For Product..."
            />

            <div className="absolute  top-[5px] right-[7px] w-[24px] xl:w-[30px] h-[24px] xl:h-[30px] rounded-full flex justify-center items-center bg-[var(--primary-color)]">
              <SearchIcon sx={{ color: "#eee", fontSize: 14 }} />
            </div>
          </div>
        </form>

        <div className="mt-4">
          {[1, 1, 1, 1, 1, , 1, 1, 1].map(() => {
            return <SearchedProduct />;
          })}
        </div>
      </section>
    </>
  );
};

export default Search;
