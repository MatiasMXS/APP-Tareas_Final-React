import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    openAlert: false,
    message: "",
  },
  reducers: {
    setAlert: (state, action) => {
      state.openAlert = action.payload.openAlert;
      state.message = action.payload.message;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;