import { Box, LinearProgress, Typography } from "@mui/material";
import TareasTable from "../../Components/TareasTable/TareasTable";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTaskProriti } from "../../services/getTaskPrioriti";

export const Prioriti = () => {
    const { nivel } = useParams(); // Capturamos el parámetro dinámico
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    taskPrioriti,
    isLoading,
    error,
  } = useSelector((state) => state.taskPrioriti);

  const validacion = ["alta", "media", "baja"];

  useEffect(() => {
    if (!validacion.includes(nivel)) {
      navigate("/dashboard");
    } else {
      dispatch(getTaskProriti({ prioriti: nivel }));
    }
  }, [nivel, dispatch, navigate]);

  if (isLoading) {
    return (
      <Box component="loading" sx={{ flexGrow: 1, p: 10 }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }
  if (error) {
    return <Typography>No existen esta prioridad</Typography>;
  }

  return (
    <Box sx={{ alignContent: "center", margin: "0 auto", gap: "12px" }}>
      <TareasTable tareas={taskPrioriti} />
    </Box>
  );
};
