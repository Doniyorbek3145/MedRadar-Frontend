import { Breadcrumb } from "components";

const Home = () => {
  const paths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Lorem ipsum dolor", path: "/" },
  ];
  return (
    <div>
      <Breadcrumb paths={paths} className="bread-crumb" />
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
