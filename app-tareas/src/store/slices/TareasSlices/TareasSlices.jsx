import { createSlice } from "@reduxjs/toolkit";

const tareasSlice = createSlice({
  name: "tareas",
  initialState: {
    tareas: [],
  },
  reducers: {
    setTareas: (state, action) => {
      state.tareas = action.payload;
    },
  },
});

export const { setTareas} = tareasSlice.actions;
export default tareasSlice.reducer;

//get tareas
//add tareas
//check tareas
//update tarea
// delete tareas
//prioridad
// porxima a terminar
