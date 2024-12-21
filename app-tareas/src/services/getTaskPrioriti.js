import axios from "axios";
import { baseURL, prioridadURL, tareasURL } from "../App";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTaskProriti = createAsyncThunk(
  "TaskPririti/getTaskPririti",
  async (payload, thunkAPI) => {
    
    try {
      const {prioriti} = payload;
      const url = `${baseURL}${tareasURL}${prioridadURL}/${prioriti}`;
  console.log("URL:", url);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);