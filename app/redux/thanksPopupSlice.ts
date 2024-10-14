import { createSlice } from "@reduxjs/toolkit";

interface thanksPopupState {
  isOpen: boolean;
}

const initialState: thanksPopupState = {
  isOpen: false,
};

const thanksPopupSlice = createSlice({
  name: "thanksPopup",
  initialState,
  reducers: {
    openThanksPopup(state) {
      state.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeThanksPopup(state) {
      state.isOpen = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const { openThanksPopup, closeThanksPopup } = thanksPopupSlice.actions;

export default thanksPopupSlice.reducer;
