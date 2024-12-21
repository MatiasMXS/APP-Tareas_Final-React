import { Box, LinearProgress, Typography } from "@mui/material";
import useGetTareas from "../../hooks/useGetTareas";
import getTareas from "../../services/getTareas"
import TareasTable from "../../Components/TareasTable/TareasTable";
import { baseURL, tareasURL } from "../../App";





export const Dashboard = () => {
 const {tareas, loading} = useGetTareas(`${baseURL}${tareasURL}`, getTareas)

 
 if(loading){
  return ( <Box component="loading" sx={{ flexGrow: 1, p: 10 }}><LinearProgress color="inherit" /></Box>);
 }

 if (tareas.length === 0) {
  return (
    <>
    <Typography>No existen tareas!</Typography>
    </>
  )
}

 return (
    <Box sx={{alignContent:"center",
      margin: "0 auto",
      gap: "12px",
    }}>
      <TareasTable tareas={tareas}/>
    </Box>
  );
};
