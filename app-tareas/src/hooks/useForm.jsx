import { useState } from "react";
import { postTask } from "../services/postsTask";

export const useForm = () => {
  const [TaskForm, setTaskForm] = useState({
    titulo: "",
    fechaLimite: null,
    prioridad: "",
    materia: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setTaskForm({ ...TaskForm, [e.target.name]: e.target.value });
  };
  const handleChangeDateTime = (newDateTime) => {
    const newDate= newDateTime.format("YYYY-MM-DD HH:mm:ss");
    console.log(newDate);
    setTaskForm({...TaskForm, fechaLimite: newDate})
    
  };


  const handleSubmit = async () => {
    const sendData = await postTask(TaskForm);
    console.log({ sendData });
    setTaskForm({
      titulo: "",
      fechaLimite: null,
      prioridad: "",
      materia: "",
      descripcion: "",
    });
  };

  const handleClean= async () => {
    setTaskForm({
      titulo: "",
      fechaLimite: null,
      prioridad: "",
      materia: "",
      descripcion: "",
    });
  };

  return { TaskForm, handleChange, handleSubmit, handleChangeDateTime, handleClean};
};
