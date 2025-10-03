import { createSlice } from "@reduxjs/toolkit";

const categorySice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, actions) => {
      state.categories = actions.payload;
    },
  },
});

export default categorySice.reducer;
export const { setCategories } = categorySice.actions;
