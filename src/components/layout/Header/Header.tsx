const { Header } = Layout;
import Account from "./components";
import { Badge, Layout } from "antd";
import { LetterIcon, RingIcon } from "assets/images/svg";
import { Button, DataPicker, Select } from "components";

const HeaderComponent = () => {
  return (
    <Header className="site-layout-sub-header-background">
      <DataPicker />
      <div className="header-box">
        <Button type="text">
          <Badge count={2}>
            <img
              height={20}
              width={20}
              src={LetterIcon}
              alt="letter icon"
              className="header-icon"
            />
          </Badge>
        </Button>
        <Button type="text">
          <Badge count={6}>
            <img
              width={20}
              height={20}
              src={RingIcon}
              alt="ring icon"
              className="header-icon"
            />
          </Badge>
        </Button>
        <Select />
        <Account />
      </div>
    </Header>
  );
};

export default HeaderComponent;
