import { lazy } from "react";

const Login = lazy(() => import("models/Auth/pages/Login"));
const ForgotPassword = lazy(() => import("models/Auth/pages/ForgotPassword"));

export { Login, ForgotPassword };
