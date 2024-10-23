import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/detail", element: <Details /> },
]);

export default Router;
