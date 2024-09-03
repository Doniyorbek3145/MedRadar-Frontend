import { lazy } from "react";

const Login = lazy(() => import("Models/Auth/pages/Login"));
const NewPassword = lazy(() => import("Models/Auth/pages/NewPassword"));
const EnterPassword = lazy(() => import("Models/Auth/pages/EnterPassword"));
const ForgotPassword = lazy(() => import("Models/Auth/pages/ForgotPassword"));

export { EnterPassword, ForgotPassword, Login, NewPassword };
