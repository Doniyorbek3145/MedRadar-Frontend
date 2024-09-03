import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import {
  SecondRoom,
  AnotherRoom,
  Error,
  Home,
  Report,
  ThirdRoom,
} from "./AppRoutes";
import { EnterPassword, ForgotPassword, Login, NewPassword } from "Models/Auth";

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
      {
        element: <Report />,
        path: "/pages/report",
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/pages/login",
    element: <Login />,
  },
  {
    element: <EnterPassword />,
    path: "/pages/enter-password",
  },
  {
    element: <ForgotPassword />,
    path: "/pages/forgotpassword",
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);

export default routes;
