import {
  createBrowserRouter
} from "react-router-dom";
import Registration from "./views/Registration";
import Login from "./views/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
