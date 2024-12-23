import { Box} from "@mui/material";
import { TaskFormComponent } from "../../Components/TaskForm/TaskForm";
import { useForm } from "../../hooks/useForm";
import FuctionAlert from "../../Components/FunctionsAlert/FunctionAlert";

export const AddTaskPage = () => {
  const {
    TaskForm,
    handleChange,
    handleSubmit,
    handleChangeDateTime,
    handleClean,
  } = useForm();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "100%",
      }}
    >
      <TaskFormComponent
        TaskForm={TaskForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeDateTime={handleChangeDateTime}
        handlerButton={handleClean}
        title={"Nueva Tarea"}
        textButton1={"Agregar"}
        textButton2={"Limpiar"}
      />
      <FuctionAlert />
    </Box>
  );
};
