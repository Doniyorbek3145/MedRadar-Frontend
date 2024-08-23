import { lazy } from "react";

const Home = lazy(() => import("models/Home"));
const Error = lazy(() => import("models/Error"));
const Report = lazy(() => import("models/Report"));
const ThirdRoom = lazy(() => import("models/ThirdRoom"));
const SecondRoom = lazy(() => import("models/SecondRoom"));
const AnotherRoom = lazy(() => import("models/AnotherRoom"));

export { Home, Error, SecondRoom, ThirdRoom, AnotherRoom, Report };
