import { Box, LinearProgress, Typography } from "@mui/material";
import useGetTareas from "../../hooks/useGetTareas";
import getTareas from "../../services/getTareas";
import TareasTable from "../../Components/TareasTable/TareasTable";

import { baseURL, tareasURL } from "../../App";
import FuctionAlert from "../../Components/FunctionsAlert/FunctionAlert";

export const Dashboard = () => {
  const { tareas, loading } = useGetTareas(`${baseURL}${tareasURL}`, getTareas);
  if (loading) {
    return (
      <Box
        component="loading"
        Color="primary"
        sx={{ flexGrow: 1, p: 10, Color: "primary" }}
      >
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (tareas.length === 0) {
    return (
      <>
        <Typography variant="h5" sx={{ flexGrow: 1, p: 10, Color: "primary" }}>
          No existen tareas
        </Typography>
      </>
    );
  }

  return (
    <Box sx={{ alignContent: "center", margin: "0 auto", gap: "12px" }}>
      <TareasTable tareas={tareas} Titulo={"Lista de tareas"} />
      <FuctionAlert/>
    </Box>
  );
};
