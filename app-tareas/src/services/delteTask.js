import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const deleteTask = async (idRow) => {
  const url = `${baseURL}${tareasURL}/${idRow}`;
  console.log("URL:", url);

  try {
    const response = await axios.delete(url);

    console.log("Respuesta del servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al realizar el DELETE:", error.response?.data || error.message);
    throw error;
  }
};
