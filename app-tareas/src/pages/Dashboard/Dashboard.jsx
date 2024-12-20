import { Box, LinearProgress } from "@mui/material";
import useGetTareas from "../../hooks/useGetTareas";
import getTareas from "../../services/getTareas"
import TareasTable from "../../Components/TareasTable/TareasTable";


const baseURL = import.meta.env.VITE_BASE_URL;
const tareasURL = import.meta.env.VITE_TAREAS;



export const Dashboard = () => {
 const {tareas, loading} = useGetTareas(`${baseURL}${tareasURL}`, getTareas)

 
 if(loading){
  return ( <Box component="loading" sx={{ flexGrow: 1, p: 10 }}><LinearProgress color="inherit" /></Box>);
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
