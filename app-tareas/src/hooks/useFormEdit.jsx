import { useState } from "react";
import { putTask } from "../services/putTask";
import { useDispatch } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";
import { getTaskProriti } from "../services/getTaskPrioriti";
import { useParams } from "react-router";
import { getTaskEnd } from "../services/getTaskEnd";
import useAlert from "./useAlert";

export const useFormEdit = () => {
  const {handleAlertOpen} = useAlert();
  const dispatch = useDispatch();
  const { dia } = useParams();
  const [TaskForm, setTaskForm] = useState({
    _id: "",
    titulo: "",
    fechaLimite: null,
    prioridad: "",
    materia: "",
    descripcion: "",
    etiquetas: "",
  });

  const handleUpdate = (e) => {
    setTaskForm({
      _id: e._id,
      titulo: e.titulo,
      fechaLimite: e.fechaLimite,
      prioridad: e.prioridad,
      materia: e.materia,
      descripcion: e.descripcion,
      etiquetas: e.etiquetas,
    });
  };

  const handleChange = (e) => {
    setTaskForm({ ...TaskForm, [e.target.name]: e.target.value });
  };
  const handleChangeDateTime = (newDateTime) => {
    const newDate = newDateTime.format("YYYY-MM-DD HH:mm:ss");
    setTaskForm({ ...TaskForm, fechaLimite: newDate });
  };

  const handleSubmit = async () => {
    const validacion = ["1", "2", "7"];
    const { _id, ...dataWithoutId } = TaskForm;
    const sendData = await putTask(dataWithoutId, TaskForm._id);
    const response = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTareas(response));
    dispatch(getTaskProriti({ prioriti: TaskForm.prioridad }));
    if (dia !== undefined && validacion.includes(dia)) {
      dispatch(getTaskEnd({ day: dia }));
    }
    handleAlertOpen("Tarea Actualizada con Exito")
  };

  return {
    TaskForm,
    handleChange,
    handleSubmit,
    handleChangeDateTime,
    handleUpdate,
  };
};
