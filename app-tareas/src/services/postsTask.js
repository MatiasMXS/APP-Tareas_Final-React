import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const postTask = async (taskForm) => {
  const response = await axios.post(
    `${baseURL}${tareasURL}`,

    {
      titulo: taskForm.titulo,
      fechaLimite: taskForm.fechaLimite,
      prioridad: taskForm.prioridad,
      materia: taskForm.materia,
      descripcion: taskForm.descripcion,
      etiquetas: taskForm.etiquetas,
    },
  );
  return response;
};
