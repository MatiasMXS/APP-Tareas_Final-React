
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import LoginPage from "./pages/login";
import ButtonAppBar from "./Components/ButtonAppBar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />,
        <Route element={<ButtonAppBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
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
