import {
  Box,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";

export const TareasTable = ({ tareas }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
      <Toolbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h3" component="h2">
        Lista de tareas
      </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "lightblue" }}>
                <TableRow>
                <TableCell></TableCell>
                  <TableCell>Titulo</TableCell>
                  <TableCell>Fecha Limite</TableCell>
                  <TableCell>Prioridad</TableCell>
                  <TableCell>Etiquetas</TableCell>
                  <TableCell>Materia</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tareas.map((tarea) => (
                    <TableRow key={tarea.id}>
                      <TableCell>
                    <Checkbox />
                  </TableCell>
                      <TableCell>{tarea.titulo}</TableCell>
                      <TableCell>{tarea.fechaLimite}</TableCell>
                      <TableCell>
                      <Chip
                      label={tarea?.prioridad}
                      color={
                        tarea?.prioridad === "alta"
                        ? "error"
                        : tarea?.prioridad === "media"
                        ? "warning"
                        : tarea?.prioridad === "baja"
                        ? "secondary"
                        : "default"
                      }
                      style={{ marginBottom: "10px" }}
                    />
                      </TableCell>
                      <TableCell>{tarea.etiquetas}</TableCell>
                      <TableCell>{tarea.materia}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </Box>
  );
};

export default TareasTable;


