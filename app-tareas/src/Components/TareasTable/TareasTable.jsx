/* eslint-disable react/prop-types */
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import ModalEdit from "../ModalEdit/ModalEdit";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useTaskTable } from "../../hooks/useTaskTable";
import TareasTableCuerpo from "../TareasTableCuerpo/TareasTableCuerpo";

export const TareasTable = ({ tareas, Titulo }) => {
  const {
    handleComplete,
    openModalEdit,
    openModalDelete,
    expandedRow,
    selectedRow,
    handleEditClick,
    handleDeleteClick,
    HandleExpandedRow,
    setOpenModalEdit,
    setOpenModalDelete,
  } = useTaskTable();

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
          {Titulo}
        </Typography>
        <TableContainer>
          <Table color="primary">
            <TableHead
              sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            >
              <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{ color: "white" }}>Titulo</TableCell>
                <TableCell sx={{ color: "white" }}>Fecha Limite</TableCell>
                <TableCell sx={{ color: "white" }}>Prioridad</TableCell>
                <TableCell sx={{ color: "white" }}>Etiquetas</TableCell>
                <TableCell sx={{ color: "white" }}>Materia</TableCell>
                <TableCell sx={{ color: "white" }}>Editar</TableCell>
                <TableCell sx={{ color: "white" }}>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TareasTableCuerpo
              tareas={tareas}
              HandleExpandedRow={HandleExpandedRow}
              expandedRow={expandedRow}
              handleComplete={handleComplete}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          </Table>
        </TableContainer>
        <ModalEdit
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          selectedRow={selectedRow}
        />
        <ModalDelete
          openModalDelete={openModalDelete}
          setOpenModalDelete={setOpenModalDelete}
          selectedRow={selectedRow}
        />
      </div>
    </Box>
  );
};

export default TareasTable;
