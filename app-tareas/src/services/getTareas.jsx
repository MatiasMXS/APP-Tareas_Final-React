import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const tareas = import.meta.env.VITE_TAREAS;

export const getTareas = () => {
  try {
    const respose = axios.get(`${baseURL}${tareas}`);
  } catch (error) {}
};
