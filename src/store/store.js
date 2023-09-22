import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./homePage";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
