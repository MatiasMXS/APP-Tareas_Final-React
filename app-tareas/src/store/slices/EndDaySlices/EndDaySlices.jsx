import { createSlice } from "@reduxjs/toolkit";
import { getTaskEnd } from "../../../services/getTaskEnd";

const endDaySlices = createSlice({
  name: "endDaySlices",
  initialState: {
    endDay: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskEnd.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTaskEnd.fulfilled, (state, action) => {
        state.endDay = action.payload;
        state.isLoading = false;
      })
      .addCase(getTaskEnd.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default endDaySlices.reducer;