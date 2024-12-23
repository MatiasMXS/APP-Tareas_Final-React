import { Box, Button, Modal, Typography } from "@mui/material";
import { useDeleteTask } from "../../hooks/useDeleteTask";

export const ModalDelete = ({ openModalDelete, setOpenModalDelete, selectedRow }) => {
  const { handleDelete } = useDeleteTask();

  const handleClose = () => setOpenModalDelete(false);
  const handleDeleteButton = () => {
    handleDelete(selectedRow);
    setOpenModalDelete(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={openModalDelete}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" gutterBottom>
          ¿Desea Eliminar esta tarea?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2, // Espaciado entre los botones
            marginTop: 2, // Espaciado superior
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleDeleteButton}
          >
            Sí
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
