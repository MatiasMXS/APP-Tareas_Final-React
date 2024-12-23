import { useState } from "react";
import { useCompleteTask } from "./useCompleteTask";

export const useTaskTable = () => {
  const { handleComplete } = useCompleteTask();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [expandedRow, setExpandedRow] = useState({});
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
    setOpenModalEdit(true);
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalDelete(true);
  };

  const HandleExpandedRow = (rowId) => {
    setExpandedRow((prev) => ({
      ...prev,
      [rowId]: !prev[rowId], // Cambia el estado solo para la fila específica
    }));
  };

  return {
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

  };
};

export default useTaskTable;
