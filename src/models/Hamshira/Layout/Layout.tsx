const { Content } = Layout;
import { Layout } from "antd";
import { useEffect } from "react";
import { Header, Sidebar } from "../Components";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (!token) navigate("/pages/login");
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content>
          <div style={{ padding: 24, minHeight: "100vh" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
