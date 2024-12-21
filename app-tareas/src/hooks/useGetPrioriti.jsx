import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";
import { getTaskPririti } from "../services/getTaskPrioriti";
export const useGetPrioriti = () => {
  const dispatch = useDispatch();
  const { taskPrioriti, isLoading, error } = useSelector(
    (state) => state.taskPrioriti
  );
 
  const [prioridad, setPrioridad] = useState("");

  useEffect(() => {
    dispatch(getTaskPririti({  prioridad }));
  }, [prioridad]);

  useEffect(() => {
    if (taskPrioriti && !isLoading && !error) {
      dispatch(setTareas(taskPrioriti));
    }
  }, [taskPrioriti, isLoading]);

  const handleprioridadChange = (e) => {
    setPrioridad(e);
  };
  return {
    isLoading,
    handleprioridadChange,
  };
};

export default useGetPrioriti;
