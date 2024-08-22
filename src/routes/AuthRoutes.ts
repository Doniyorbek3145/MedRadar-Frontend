import { lazy } from "react";

const Login = lazy(() => import("models/Auth/pages/Login"));
const EnterPassword = lazy(() => import("models/Auth/pages/EnterPassword"));
const ForgotPassword = lazy(() => import("models/Auth/pages/ForgotPassword"));

export { Login, ForgotPassword, EnterPassword };
