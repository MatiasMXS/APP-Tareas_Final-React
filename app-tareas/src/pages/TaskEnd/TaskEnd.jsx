import { Box, LinearProgress, Typography } from "@mui/material";
import TareasTable from "../../Components/TareasTable/TareasTable";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTaskEnd } from "../../services/getTaskEnd";
import FuctionAlert from "../../Components/FunctionsAlert/FunctionAlert";

export const TaskEnd = () => {
  const { dia } = useParams(); // Capturamos el parámetro dinámico
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { endDay, isLoading, error } = useSelector((state) => state.endDay);

  const validacion = ["1", "2", "7"];

  useEffect(() => {
    if (!validacion.includes(dia)) {
      navigate("/dashboard");
    } else {
      dispatch(getTaskEnd({ day: dia }));
    }
  }, [dia, dispatch, navigate]);

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
        No xisten tareas a vencer
      </Typography>
    );
  }

  return (
    <Box sx={{ alignContent: "center", margin: "0 auto", gap: "12px" }}>
      <TareasTable tareas={endDay} Titulo={"Tareas a vencer"} />
      <FuctionAlert />
    </Box>
  );
};
