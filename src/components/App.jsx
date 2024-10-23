import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import "../index.css";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
