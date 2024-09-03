import { EnterPassword, ForgotPassword, Login, NewPassword } from "Models/Auth";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <ForgotPassword />,
    path: "/pages/forgotpassword",
  },
  {
    element: <Login />,
    path: "/pages/login",
  },
  {
    element: <EnterPassword />,
    path: "/pages/enter-password",
  },
  {
    element: <NewPassword />,
    path: "/pages/new-password",
  },
]);

export default routes;
