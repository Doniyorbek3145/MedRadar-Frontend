import MainRoutes from "routes";
import { Suspense } from "react";
import { Loader } from "components";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={MainRoutes} />
    </Suspense>
  );
};

export default App;
