import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTareas } from "../store/slices/TareasSlices/TareasSlices";

export const useGetTareas = (url, getData) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas.tareas);

  const resolve = async () => {
    try {
      const response = await getData(url);
      
      dispatch(setTareas(response));
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    } finally {
      setLoading(false);
      
    }
  };

  useEffect(() => {
    resolve();
    
  }, [url]);
  return { tareas, loading };
};

export default useGetTareas;
