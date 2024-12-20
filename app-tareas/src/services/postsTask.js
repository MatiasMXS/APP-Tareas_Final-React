import axios from "axios";
import { baseURL, tareasURL } from "../App";

export const postTask = async (bookForm) => {
  const response = await axios.post(
    `${baseURL}${tareasURL}`,

    {
      titulo: bookForm.titulo,
      fechaLimite: bookForm.fechaLimite,
      prioridad: bookForm.prioridad,
      materia: bookForm.materia,
      descripcion: bookForm.descripcion,
    },
  );

  console.log({ response });
  return response;
};
