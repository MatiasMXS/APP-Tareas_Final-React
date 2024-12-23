import { Box, LinearProgress, Typography } from "@mui/material";
import TareasTable from "../../Components/TareasTable/TareasTable";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTaskProriti } from "../../services/getTaskPrioriti";
import FuctionAlert from "../../Components/FunctionsAlert/FunctionAlert";

export const Prioriti = () => {
  const { prioridad } = useParams(); // Capturamos el parámetro dinámico
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { taskPrioriti, isLoading, error } = useSelector(
    (state) => state.taskPrioriti
  );

  const validacion = ["alta", "media", "baja"];

  useEffect(() => {
    if (!validacion.includes(prioridad)) {
      navigate("/dashboard");
    } else {
      dispatch(getTaskProriti({ prioriti: prioridad }));
    }
  }, [prioridad, dispatch, navigate]);

  if (isLoading) {
    return (
      <Box component="loading" sx={{ flexGrow: 1, p: 10 }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h5" sx={{ flexGrow: 1, p: 10, Color: "primary" }}>
        No existen tareas con este Nivel de prioridad
      </Typography>
    );
  }

  return (
    <Box sx={{ alignContent: "center", margin: "0 auto", gap: "12px" }}>
      <TareasTable tareas={taskPrioriti} Titulo={"Tareas por prioridad "} />
      <FuctionAlert />
    </Box>
  );
};
