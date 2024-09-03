import type { FormProps } from "antd";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();

  type authValueTypes = {
    isUserName: boolean;
    isPassword: boolean;
  };

  const [isAuthValue, setIsAuthValue] = useState<authValueTypes>({
    isUserName: false,
    isPassword: false,
  });

  const [authValue, setAuthValue] = useState<FieldType>({
    password: "",
    username: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setAuthValue({
      ...authValue,
      [e.target.name]: value,
    });

    if (e.target.name === "username") {
      if (e.target.value.length === 0) {
        setIsAuthValue({
          ...isAuthValue,
          isUserName: true,
        });
      } else {
        setIsAuthValue({
          ...isAuthValue,
          isUserName: false,
        });
      }
    }

    if (e.target.name === "password") {
      if (e.target.value.length === 0) {
        setIsAuthValue({
          ...isAuthValue,
          isPassword: true,
        });
      } else {
        setIsAuthValue({
          ...isAuthValue,
          isPassword: false,
        });
      }
    }
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    navigate("/pages/login");
    localStorage.setItem("token", "asdasd");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="auth-login">
      <h1 className="visually-hidden">MedRadar Login</h1>
      <div className="auth-login__background">
        <div className="auth-login__content">
          <h2 className="auth-login__content-title">Yangi parol</h2>
          <p className="auth-login__content-text">Yangi parolni kiriting</p>
        </div>

        <Form
          name="basic"
          autoComplete="off"
          onFinish={onFinish}
          className="auth-login__form"
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
        >
          <Form.Item<FieldType>
            name="password"
            className="auth-login__label"
            rules={[
              { required: true, message: "Iltimos passwordni to'ldiring" },
            ]}
          >
            <Input.Password
              name="password"
              onChange={onChange}
              value={authValue.password}
              className="auth-login__form-input"
              placeholder="Yangi parolni kiriting"
              prefix={
                <LockOutlined
                  className={`auth-login__form-icon ${
                    isAuthValue.isPassword && "auth-login__form-icon--color"
                  }`}
                />
              }
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            className="auth-login__label"
            rules={[
              { required: true, message: "Iltimos passwordni to'ldiring" },
            ]}
          >
            <Input.Password
              name="password"
              onChange={onChange}
              value={authValue.password}
              className="auth-login__form-input"
              placeholder="Yangi parolni kiriting"
              prefix={
                <LockOutlined
                  className={`auth-login__form-icon ${
                    isAuthValue.isPassword && "auth-login__form-icon--color"
                  }`}
                />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="auth-login__form-submit"
            >
              Yuborish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
