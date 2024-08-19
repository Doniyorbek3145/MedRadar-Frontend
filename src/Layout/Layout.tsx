const { Content } = Layout;
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "components";

const LayoutComponent = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100vh" }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
