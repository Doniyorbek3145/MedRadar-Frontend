import Layout from "Layout";
import { createBrowserRouter } from "react-router-dom";
import { ForgotPassword, Login, EnterPassword } from "models/Auth";
import { Home, Error, SecondRoom, ThirdRoom } from "routes/AppRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <SecondRoom />,
        path: "/pages/second-room",
      },
      {
        element: <ThirdRoom />,
        path: "/pages/third-room",
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
