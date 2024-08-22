const { Sider } = Layout;
import { useState } from "react";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import {
  RightOutlined,
  PieChartOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
        <h1 className="site-title">MedRadar</h1>
        <h2 className="site-sub-title">Bosh shifokor</h2>
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
