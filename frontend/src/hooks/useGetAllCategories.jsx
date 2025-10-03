import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategories } from "../redux/categorySlice";

const useGetAllCategories = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/categories/all"
      );

      dispatch(setCategories(data.categories));
    } catch (error) {
      console.error(
        "error in fetching categories: ",
        error.response.data.error || "Something went wrong!"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useGetAllCategories;
