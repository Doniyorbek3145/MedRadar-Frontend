const { Sider } = Layout;
import { useState } from "react";
import { Layout, Menu } from "antd";

import {
  RightOutlined,
  PieChartOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          1 - otdeleniya
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          2 - otdeleniya
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          3 - otdeleniya
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
