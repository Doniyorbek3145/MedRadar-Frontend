import { Hamshira, Shifokor, SuperAdmin } from "Models";

const App = () => {
  type roleTypes = string;

  const role: roleTypes = "Hamshira";

  switch (role) {
    case "SuperAdmin":
      return <SuperAdmin />;
    case "Hamshira":
      return <Hamshira />;
    case "Shifokor":
      return <Shifokor />;
  }
};

export default App;
