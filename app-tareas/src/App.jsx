
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/login/login";
import ButtonAppBar from "./Components/ButtonAppBar/ButtonAppBar";
import { AddBookPage } from "./pages/Add/AddBookPage";
import { Prioriti } from "./pages/Prioriti/Prioriti";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const tareasURL = import.meta.env.VITE_TAREAS;
export const completarURL = import.meta.env.VITE_COMPLETAR;
export const prioridadURL = import.meta.env.VITE_PRIORIDAD;



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />,
        <Route element={<ButtonAppBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/dashboard/prioridad/:nivel" element={<Prioriti />} />
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
