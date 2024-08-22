import Layout from "Layout";
import { Home, Error } from "routes/AppRoutes";
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
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
