import { useState } from "react";
import { postTask } from "../services/postsTask";
import useAlert from "./useAlert";

export const useForm = () => {
  const {handleAlertOpen} = useAlert();
  const [TaskForm, setTaskForm] = useState({
    titulo: "",
    fechaLimite: null,
    prioridad: "",
    materia: "",
    descripcion: "",
    etiquetas: "",
  });

  const handleChange = (e) => {
    setTaskForm({ ...TaskForm, [e.target.name]: e.target.value });
  };
  const handleChangeDateTime = (newDateTime) => {
    const newDate= newDateTime.format("YYYY-MM-DD HH:mm:ss");
    setTaskForm({...TaskForm, fechaLimite: newDate})
    
  };


  const handleSubmit = async () => {
    const sendData = await postTask(TaskForm);
    handleAlertOpen("Tarea cargada con exito")
    setTaskForm({
      titulo: "",
      fechaLimite: null,
      prioridad: "",
      materia: "",
      descripcion: "",
      etiquetas: "",
    });
  };

  const handleClean= async () => {
    setTaskForm({
      titulo: "",
      fechaLimite: null,
      prioridad: "",
      materia: "",
      descripcion: "",
      etiquetas: "",
    });
  };

  return { TaskForm, handleChange, handleSubmit, handleChangeDateTime, handleClean};
};
