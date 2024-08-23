import type { FormProps } from "antd";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, CheckCircleOutlined } from "@ant-design/icons";

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
    if (authValue.password === "admin" && authValue.username === "admin") {
      navigate("/");
    }
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
          <h2 className="auth-login__content-title">Kirish</h2>
          <p className="auth-login__content-text">
            Kirish uchun quyidagilarni to’ldiring
          </p>
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
            name="username"
            className="auth-login__label"
            rules={[
              { required: true, message: "Iltimos username ni to'ldiring" },
            ]}
          >
            <Input
              name="username"
              onChange={onChange}
              value={authValue.username}
              className="auth-login__form-input"
              prefix={
                <CheckCircleOutlined
                  className={`auth-login__form-icon ${
                    isAuthValue.isUserName && "auth-login__form-icon--color"
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
              prefix={
                <LockOutlined
                  className={`auth-login__form-icon ${
                    isAuthValue.isPassword && "auth-login__form-icon--color"
                  }`}
                />
              }
            />
          </Form.Item>

          <div className="auth-login__box">
            <Button
              onClick={() => navigate("/pages/forgotpassword")}
              className="auth-login__form-forgot"
              type="link"
            >
              Parolni unutdingizmi?
            </Button>
          </div>

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>
              Roʻyxatdan oʻtish orqali siz bizning maxfiylik siyosatimiz bilan
              bogʻliq shartlarimizga rozilik bildirasiz.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="auth-login__form-submit"
            >
              Kirish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
