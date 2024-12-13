import {
  Button,
  Checkbox,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Label } from "@mui/icons-material";
import "./Tareas.css";

export const Tareas = () => {
  return (
    <div className="container">
      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ margin: '20px' }}>
        Lista de Tareas
      </Typography>
      <div className="row">
        <TextField
          variant="outlined"
          placeholder="Buscar..."
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <Button variant="contained">
          <SearchIcon />
        </Button>
        <Button variant="contained">
          <AddIcon />
        </Button>
      </div>
      <div className="checkbox-container">
        <Button size="large">
          <Checkbox
            {...Label}
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
          Tarea
        </Button>
      </div>
    </div>
  );
};

export default Tareas;
