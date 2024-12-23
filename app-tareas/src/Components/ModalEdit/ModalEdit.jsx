/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TaskFormComponent } from "../TaskForm/TaskForm";
import { useFormEdit } from "../../hooks/useFormEdit";

export const ModalEdit = ({ openModalEdit, setOpenModalEdit, selectedRow }) => {
  const {
    TaskForm,
    handleChange,
    handleSubmit,
    handleChangeDateTime,
    handleUpdate,
  } = useFormEdit();
  const handleClose = () => setOpenModalEdit(false);
  const handleSave = () => {
    handleSubmit();
    setOpenModalEdit(false);
  };

  useEffect(() => {
    handleUpdate(selectedRow);
  }, [selectedRow]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%", // Cambia la anchura para que se ajuste mejor al contenido
    maxHeight: "90vh", // Define una altura máxima
    overflow: "auto", // Habilita el scroll si el contenido excede el tamaño
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={openModalEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TaskFormComponent
          TaskForm={TaskForm}
          handleChange={handleChange}
          handleSubmit={handleSave}
          handleChangeDateTime={handleChangeDateTime}
          handlerButton={handleClose}
          title={"Editar Tarea"}
          textButton1={"Guardar"}
          textButton2={"Cancelar"}
        />
      </Box>
    </Modal>
  );
};

export default ModalEdit;
