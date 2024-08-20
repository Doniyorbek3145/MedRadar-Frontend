import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

type pathsType = {
  id: number;
  path: string;
  title: string;
};

type breadcrumbTypes = {
  paths: pathsType[];
  className: string;
};

const BreadcrumbComponent = ({ paths, className }: breadcrumbTypes) => {
  return (
    <Breadcrumb className={className}>
      {paths.length > 0 &&
        paths.map((el: pathsType) => {
          return (
            <Breadcrumb.Item key={el.id}>
              <Link to={el.path}>{el.title}</Link>
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
