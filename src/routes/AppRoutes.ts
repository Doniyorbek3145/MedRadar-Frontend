import { lazy } from "react";

const Home = lazy(() => import("models/Home"));
const Error = lazy(() => import("models/Error"));
const ThirdRoom = lazy(() => import("models/ThirdRoom"));
const SecondRoom = lazy(() => import("models/SecondRoom"));

export { Home, Error, SecondRoom, ThirdRoom };
