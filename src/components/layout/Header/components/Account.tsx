import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Space } from "antd";
import { AvatarIcon } from "assets/images/svg";
import { AccountAvatarImage } from "assets/images/png";

const items: MenuProps["items"] = [
  {
    key: "0",
    label: <Link to="/pages/login">Chiqish</Link>,
  },
];

const Account = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className="account">
          <div className="account__container">
            <div className="account__content">
              <h2 className="account__content-name">Afzal Pulatov</h2>
              <h3 className="account__content-job">Shifokor</h3>
            </div>
            <Avatar className="account-avatar" src={AccountAvatarImage} />
          </div>
          <img
            width={14}
            height={14}
            alt="down-icon"
            src={AvatarIcon}
            className="account-down-icon"
          />
        </div>
      </Space>
    </a>
  </Dropdown>
);

export default Account;
