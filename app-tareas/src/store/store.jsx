import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./slices/TareasSlices/TareasSlices";
import taskPrioritiReducer from "./slices/TaskPrioritiSlices/TaskPrioritiSlices";
import endDayReducer from "./slices/EndDaySlices/EndDaySlices";
import alertReducer from "./slices/AlertSlices/AlertSlices";


const store = configureStore({
  reducer: {
    tareas: tareasReducer,
    taskPrioriti: taskPrioritiReducer,
    endDay: endDayReducer,
    alert: alertReducer,
  },
});

export default store;