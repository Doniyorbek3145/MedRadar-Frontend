const { Sider } = Layout;
import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  RightOutlined,
  PieChartOutlined,
  CalculatorOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { SiteLogo } from "assets/images/png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  type pagesType = {
    title: string;
    id: string | number;
    icon: React.ReactNode;
  };

  const pages: pagesType[] = [
    {
      id: "/",
      title: "1 - otdeleniya",
      icon: <PieChartOutlined />,
    },
    {
      id: "/pages/second-room",
      title: "2 - otdeleniya",
      icon: <VideoCameraOutlined />,
    },
    {
      id: "/pages/third-room",
      title: "3 - otdeleniya",
      icon: <PieChartOutlined />,
    },
    {
      id: "/pages/report",
      title: "Hisobotlar",
      icon: <CalculatorOutlined />,
    },
  ];

  return (
    <Sider
      width={280}
      collapsible
      theme="light"
      breakpoint="sm"
      collapsedWidth={0}
      onCollapse={(collapsed: boolean) => setIsOpen(collapsed)}
      trigger={
        <RightOutlined
          className={`sider-icon ${isOpen && "sider-icon-rotate"}`}
        />
      }
    >
      <div className="logo">
        <Link to="/">
          <img
            src={SiteLogo}
            alt="site-logo"
            className="site-logo"
            width={200}
            height={200}
          />
        </Link>
        <h2 className="site-sub-title">Hamshira</h2>
      </div>
      <Menu
        theme="light"
        mode="inline"
        onClick={(page) => navigate(page.key)}
        defaultSelectedKeys={[location.pathname]}
      >
        {pages.length > 0 &&
          pages.map((el: pagesType) => {
            return (
              <Menu.Item key={el.id} icon={el.icon}>
                {el.title}
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
