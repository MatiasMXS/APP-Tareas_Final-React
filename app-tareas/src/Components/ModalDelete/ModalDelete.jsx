import { Box, Button, Modal, Typography } from "@mui/material"
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useEffect } from "react";

export const ModalDelete = ({open2, setOpen2, selectedRow}) => {
    const {handleUpdate, handleDelete} = useDeleteTask();
    useEffect(() => {
        handleUpdate(selectedRow)
      }, [selectedRow]);


    const handleClose = () => setOpen2(false);
    const handleDeleteButton = () => {
    handleDelete();
    setOpen2(false);
  }

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
    return ( <Modal
        open={open2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > <Box sx={style}>
       <Typography variant="h5" gutterBottom>
              ¿Desae Eliminar esta tarea?
            </Typography>
      <Button variant="contained" color="primary"onClick={handleDeleteButton} >
              si
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              No
            </Button>
      
    </Box>
  </Modal>);
}