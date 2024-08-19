import Layout from "Layout";
import Home from "models/Home";
import { ForgotPassword, Login } from "models/Auth";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Login />,
    path: "/pages/login",
  },
  {
    element: <ForgotPassword />,
    path: "/pages/forgotpassword",
  },
]);

export default routes;
