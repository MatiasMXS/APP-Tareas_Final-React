import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./slices/TareasSlices/TareasSlices";


const store = configureStore({
  reducer: {
    tareas: tareasReducer,
  },
});

export default store;