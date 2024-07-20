import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perloader: true,
};

export const styleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.perloader = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePreloader } = styleSlice.actions;

export default styleSlice.reducer;
