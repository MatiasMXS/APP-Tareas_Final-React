import { Box, Button, Checkbox, Chip, Collapse, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

export const TareasTableCuerpo = ({tareas, HandleExpandedRow,expandedRow, handleComplete, handleEditClick, handleDeleteClick}) => {
    return ( <TableBody>
        {tareas.map((tarea) => (
          <React.Fragment key={tarea._id}>
            <TableRow
              onMouseOver={() => HandleExpandedRow(tarea._id)}
              onMouseOut={() => HandleExpandedRow(tarea._id)}
            >
              <TableCell>
                <Checkbox
                  checked={tarea?.completada}
                  onClick={() => handleComplete(tarea)}
                />
              </TableCell>
              <TableCell>{tarea.titulo}</TableCell>
              <TableCell>{tarea.fechaLimite}</TableCell>
              <TableCell>
                <Chip
                  label={tarea?.prioridad}
                  sx={{
                    backgroundColor:
                      tarea?.prioridad === "alta"
                        ? "#ff0000" // Rojo
                        : tarea?.prioridad === "media"
                        ? "#0000ff" // Naranja
                        : tarea?.prioridad === "baja"
                        ? "#008f39" // Verde
                        : "#e0e0e0", // Gris
                    color: "white",
                  }}
                  style={{ marginBottom: "10px" }}
                />
              </TableCell>
              <TableCell>{tarea.etiquetas}</TableCell>
              <TableCell>{tarea.materia}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditClick(tarea)}
                >
                  <BorderColorIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteClick(tarea)}
                >
                  <DeleteOutlineIcon />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                <Collapse
                  in={expandedRow[tarea._id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Descripción:{" "}
                      {tarea?.descripcion || "Sin Descripción"}
                    </Typography>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody> );
}

export default TareasTableCuerpo;