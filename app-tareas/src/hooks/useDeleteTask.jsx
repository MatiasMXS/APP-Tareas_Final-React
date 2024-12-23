import { deleteTask } from "../services/delteTask";
import { useDispatch } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";
import { getTaskProriti } from "../services/getTaskPrioriti";
import { useParams } from "react-router";
import { getTaskEnd } from "../services/getTaskEnd";
import useAlert from "./useAlert";

export const useDeleteTask = () => {
  const {handleAlertOpen} = useAlert();
  const dispatch = useDispatch();
  const { dia } = useParams(); 

  const handleDelete = async (e) => {
    const validacion = ["1", "2", "7"];
    
    const sendData = await deleteTask(e._id);
    const response = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTareas(response));
    dispatch(getTaskProriti({ prioriti: e.prioridad }));
      if (dia !== undefined && validacion.includes(dia)) {
        dispatch(getTaskEnd({ day: dia }));
      } 
      handleAlertOpen("Tarea Eliminada con Exito")
  };

  return {
    handleDelete,
  };
};
