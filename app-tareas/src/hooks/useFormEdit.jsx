import { useState } from "react";
import { putTask } from "../services/putTask";
import { useDispatch} from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";

export const useFormEdit = () => {
  const dispatch = useDispatch();
  const [TaskForm, setTaskForm] = useState({
    _id: "",
    titulo: "",
    fechaLimite: null,
    prioridad: "",
    materia: "",
    descripcion: "",
  });

  const handleUpdate = (e) => {
    setTaskForm({
      _id: e._id,
      titulo: e.titulo,
      fechaLimite: e.fechaLimite,
      prioridad: e.prioridad,
      materia: e.materia,
      descripcion: e.descripcion,
    });
  };

  const handleChange = (e) => {
    setTaskForm({ ...TaskForm, [e.target.name]: e.target.value });
  };
  const handleChangeDateTime = (newDateTime) => {
    const newDate = newDateTime.format("YYYY-MM-DD HH:mm:ss");
    console.log(newDate);
    setTaskForm({ ...TaskForm, fechaLimite: newDate });
  };

  const handleSubmit = async () => {
    const { _id, ...dataWithoutId } = TaskForm;
    const sendData = await putTask(dataWithoutId, TaskForm._id); 
    const response = await getTareas(`${baseURL}${tareasURL}`);
      dispatch(setTareas(response));
    console.log({ sendData });
  };

  return {
    TaskForm,
    handleChange,
    handleSubmit,
    handleChangeDateTime,
    handleUpdate,
  };
};
