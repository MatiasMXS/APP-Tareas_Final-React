/* eslint-disable react/prop-types */
import {
  Box,
  Button,
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
import ModalP from "../Modalp/Modalp";
import { useEffect, useState } from "react";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useCompleteTask } from "../../hooks/useCompleteTask";

export const TareasTable = ({ tareas }) => {
  const { handleComplete } = useCompleteTask();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedRow, setSelectedRow] = useState({
    _id: "",
    titulo: "",
    fechaLimite: null,
    prioridad: "",
    materia: "",
    descripcion: "",
  });
  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    setOpen1(true);
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setOpen2(true);
  };




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
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tareas.map((tarea) => (
                <TableRow key={tarea.id}>
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
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditClick(tarea)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteClick(tarea)}
                    >
                      Borrar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ModalP open1={open1} setOpen1={setOpen1} selectedRow={selectedRow} />
        <ModalDelete
          open2={open2}
          setOpen2={setOpen2}
          selectedRow={selectedRow}
        />
      </div>
    </Box>
  );
};

export default TareasTable;
//open1={open} setOpen={setOpen} setProducts={setProducts}
