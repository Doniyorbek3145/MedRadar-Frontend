import { lazy } from "react";

const Login = lazy(() => import("models/Auth/pages/Login"));
const NewPassword = lazy(() => import("models/Auth/pages/NewPassword"));
const EnterPassword = lazy(() => import("models/Auth/pages/EnterPassword"));
const ForgotPassword = lazy(() => import("models/Auth/pages/ForgotPassword"));

export { Login, ForgotPassword, EnterPassword, NewPassword };
