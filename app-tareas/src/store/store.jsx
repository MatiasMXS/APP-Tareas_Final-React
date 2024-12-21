import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./slices/TareasSlices/TareasSlices";
import taskPrioritiReducer from "./slices/TaskPrioritiSlices/TaskPrioritiSlices"


const store = configureStore({
  reducer: {
    tareas: tareasReducer,
    taskPrioriti: taskPrioritiReducer,
  },
});

export default store;