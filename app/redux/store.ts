import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import thanksPopupReducer from "./thanksPopupSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    thanksPopup: thanksPopupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
