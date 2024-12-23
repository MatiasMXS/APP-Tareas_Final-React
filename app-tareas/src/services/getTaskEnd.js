import axios from "axios";
import { baseURL, diaAVencerURL, tareasURL } from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTaskEnd = createAsyncThunk(
  "EndDay/getTaskEnd",
  async (payload, thunkAPI) => {
    
    try {
      const {day} = payload;
      const url = `${baseURL}${tareasURL}${diaAVencerURL}/${day}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);