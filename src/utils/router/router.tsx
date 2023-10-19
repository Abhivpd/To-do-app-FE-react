import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Header from "../../components/Header";
import App from "../../App";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
