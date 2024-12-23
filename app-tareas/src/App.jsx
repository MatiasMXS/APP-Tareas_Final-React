
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/login/login";
import ButtonAppBar from "./Components/ButtonAppBar/ButtonAppBar";
import { AddTaskPage } from "./pages/Add/AddTaskPage";
import { Prioriti } from "./pages/Prioriti/Prioriti";
import { TaskEnd } from "./pages/TaskEnd/TaskEnd";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const tareasURL = import.meta.env.VITE_TAREAS;
export const completarURL = import.meta.env.VITE_COMPLETAR;
export const prioridadURL = import.meta.env.VITE_PRIORIDAD;
export const diaAVencerURL = import.meta.env.VITE_A_VENCER;



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />,
        <Route element={<ButtonAppBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/dashboard/prioridad/:prioridad" element={<Prioriti />} />
          <Route path="/dashboard/dia-a-vencer/:dia" element={<TaskEnd />} />
          </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
