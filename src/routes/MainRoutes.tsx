import Layout from "Layout";
import { Home, Error } from "routes/AppRoutes";
import { createBrowserRouter } from "react-router-dom";
import { ForgotPassword, Login, EnterPassword } from "models/Auth";

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
    element: <EnterPassword />,
    path: "/pages/enter-password",
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
