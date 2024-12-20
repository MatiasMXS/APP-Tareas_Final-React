import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const putTask = async (taskForm, idRow) => {
  const url = `${baseURL}${tareasURL}/${idRow}`;
  console.log("URL:", url);

  try {
    const response = await axios.put(url, {
      titulo: taskForm.titulo,
      fechaLimite: taskForm.fechaLimite,
      prioridad: taskForm.prioridad,
      materia: taskForm.materia,
      descripcion: taskForm.descripcion, // Corregido
    });

    console.log("Respuesta del servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al realizar el PUT:", error.response?.data || error.message);
    throw error;
  }
};
