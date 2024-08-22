import { lazy } from "react";

const Home = lazy(() => import("models/Home"));
const Error = lazy(() => import("models/Error"));

export { Home, Error };
