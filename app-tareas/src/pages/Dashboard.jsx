import { Box, CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";
import getTareas from "../services/getTareas";
import TareasTable from "../Components/TareasTable";

const baseURL = import.meta.env.VITE_BASE_URL;
const tareas = import.meta.env.VITE_TAREAS;



export const Dashboard = () => {
 const {data, loading} = useFetch(`${baseURL}${tareas}`, getTareas)
 console.log({data});
 
 if(loading){
  <CircularProgress/>
 }

 return (
    <Box sx={{alignContent:"center",
      margin: "0 auto",
      gap: "12px",
    }}>
      <TareasTable tareas={data}/>
    </Box>
  );
};
