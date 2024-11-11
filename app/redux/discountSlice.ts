import { createSlice } from "@reduxjs/toolkit";

const discountSlice = createSlice({
  name: "discount",
  initialState: {
    isVisible: true,
  },
  reducers: {
    hideDiscount: (state) => {
      state.isVisible = false;
    },
  },
});

export const { hideDiscount } = discountSlice.actions;
export default discountSlice.reducer;
