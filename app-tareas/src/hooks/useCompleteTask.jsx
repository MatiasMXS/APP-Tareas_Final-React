
import { completeTask } from "../services/completeTask";
import { useDispatch } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";
import { getTaskProriti } from "../services/getTaskPrioriti";
import { getTaskEnd } from "../services/getTaskEnd";
import { useParams } from "react-router";
import useAlert from "./useAlert";


export const useCompleteTask = () => {
  const dispatch = useDispatch();
  const { dia } = useParams(); 
  const {handleAlertOpen} = useAlert();
  
 
  const handleComplete = async (tarea) => {
    const validacion = ["1", "2", "7"];
  
    const sendData = await completeTask(tarea._id);
    const response = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTareas(response));
    dispatch(getTaskProriti({ prioriti: tarea.prioridad }));
      if (dia !== undefined && validacion.includes(dia)) {
        dispatch(getTaskEnd({ day: dia }));
      } 
      handleAlertOpen("Tarea Checked")
  
  };

  return {
    handleComplete,
  };
};
