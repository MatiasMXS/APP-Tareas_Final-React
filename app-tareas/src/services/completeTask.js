import axios from "axios";
import { baseURL, tareasURL, completarURL } from "../App";

export const completeTask = async (idRow) => {
  const url = `${baseURL}${tareasURL}/${idRow}${completarURL}`;

  try {
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error("Error al realizar el Completar Ratea:", error.response?.data || error.message);
    throw error;
  }
};
