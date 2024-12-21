import { createSlice } from "@reduxjs/toolkit";
import { getTaskProriti } from "../../../services/getTaskPrioriti";

const taskPrioritiSlices = createSlice({
  name: "taskPrioritiSlices",
  initialState: {
    taskPrioriti: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskProriti.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTaskProriti.fulfilled, (state, action) => {
        state.taskPrioriti = action.payload;
        state.isLoading = false;
      })
      .addCase(getTaskProriti.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default taskPrioritiSlices.reducer;