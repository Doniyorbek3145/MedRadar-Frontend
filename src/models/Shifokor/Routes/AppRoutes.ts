import { lazy } from "react";

const Home = lazy(() => import("Models/Hamshira/models/Home"));
const Error = lazy(() => import("Models/Hamshira/models/Error"));
const Report = lazy(() => import("Models/Hamshira/models/Report"));
const ThirdRoom = lazy(() => import("Models/Hamshira/models/ThirdRoom"));
const SecondRoom = lazy(() => import("Models/Hamshira/models/SecondRoom"));
const AnotherRoom = lazy(() => import("Models/Hamshira/models/AnotherRoom"));

export { Home, Error, SecondRoom, ThirdRoom, AnotherRoom, Report };
