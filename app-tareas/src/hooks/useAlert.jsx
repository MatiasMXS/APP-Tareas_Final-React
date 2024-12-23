import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../store/slices/AlertSlices/AlertSlices";

export const useAlert = () => {
  const dispatch = useDispatch();
  
  // Selecciona el estado de la alerta
  const { openAlert, message } = useSelector((state) => state.alert);

  // Abre la alerta con un mensaje
  const handleAlertOpen = (FunctionMessage) => {
    dispatch(setAlert({ openAlert: true, message: String(FunctionMessage) }));
  };

  // Cierra la alerta
  const handleAlertClose = () => {
    dispatch(setAlert({ openAlert: false, message: "" }));
  };

  return {
    openAlert,
    message,
    handleAlertOpen,
    handleAlertClose,
  };
};

export default useAlert;
