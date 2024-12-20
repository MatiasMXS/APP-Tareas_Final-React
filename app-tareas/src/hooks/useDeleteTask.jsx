import { useState } from "react";
import { deleteTask } from "../services/delteTask";
import { useDispatch } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";

export const useDeleteTask = () => {
  const dispatch = useDispatch();
  const [TaskForm, setTaskForm] = useState({
    _id: "",
});

const handleUpdate = (e) => {
    setTaskForm({
      _id: e._id,
    });
  };

  const handleDelete = async () => {
    const sendData = await deleteTask(TaskForm._id);
    const response = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTareas(response));
    console.log({ sendData });
  };

  return {
    handleUpdate,
    handleDelete,
  };
};
