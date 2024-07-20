import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./Slices/Slice";

export default configureStore({
  reducer: {
    style: styleReducer,
  },
});
