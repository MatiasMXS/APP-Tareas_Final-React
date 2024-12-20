
import { completeTask } from "../services/completeTask";
import { useDispatch } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import getTareas from "../services/getTareas";
import { baseURL, tareasURL } from "../App";

export const useCompleteTask = () => {
  const dispatch = useDispatch();
  
 
  const handleComplete = async (tarea) => {
    console.log(tarea._id);
  
    const sendData = await completeTask(tarea._id);
    const response = await getTareas(`${baseURL}${tareasURL}`);
    dispatch(setTareas(response));
    console.log({ sendData });
  };

  return {
    handleComplete,
  };
};
