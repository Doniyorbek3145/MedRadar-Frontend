import Layout from "Layout";
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Error,
  ThirdRoom,
  SecondRoom,
  AnotherRoom,
} from "routes/AppRoutes";
import { ForgotPassword, Login, EnterPassword, NewPassword } from "models/Auth";

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
      {
        element: <AnotherRoom />,
        path: "/pages/another-room/:id",
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
    element: <NewPassword />,
    path: "/pages/new-password",
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
