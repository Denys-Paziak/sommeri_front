import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import thanksPopupReducer from "./thanksPopupSlice";
import discountReducer from "./discountSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    thanksPopup: thanksPopupReducer,
    discount: discountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
