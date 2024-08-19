import App from "./App.tsx";
import "assets/sass/main.scss";
import { ConfigProvider, Layout } from "antd";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <Layout>
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "#01A1B7",
            hoverBorderColor: "#01A1B7",
            activeBorderColor: "#01A1B7",
          },
          DatePicker: {
            colorBorder: "#01A1B7",
            hoverBorderColor: "#01A1B7",
            activeBorderColor: "#01A1B7",
          },
          Select: {
            colorBorder: "#01A1B7",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Layout>
);
