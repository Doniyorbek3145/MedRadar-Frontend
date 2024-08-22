import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();

  type authValueTypes = {
    isPhone: boolean;
  };

  const [isAuthValue, setIsAuthValue] = useState<authValueTypes>({
    isPhone: false,
  });

  const [authValue, setAuthValue] = useState<FieldType>({
    phone: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setAuthValue({
      ...authValue,
      [e.target.name]: value,
    });

    if (e.target.name === "phone") {
      if (e.target.value.length === 0) {
        setIsAuthValue({
          ...isAuthValue,
          isPhone: true,
        });
      } else {
        setIsAuthValue({
          ...isAuthValue,
          isPhone: false,
        });
      }
    }
  };

  type FieldType = {
    phone: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {};

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="auth-login">
      <h1 className="visually-hidden">MedRadar Forgotpassword</h1>
      <div className="auth-login__background">
        <div className="auth-login__content">
          <h2 className="auth-login__content-title">Parolni unitdingizmi?</h2>
          <p className="auth-login__content-text">
            Kiritgan telefon raqamingizga 4 xonali kod yuboriladi
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
            name="phone"
            className="auth-login__label"
            rules={[
              {
                required: true,
                message: "Iltimos telefon nomer ni kirgizing",
              },
            ]}
          >
            <Input
              name="phone"
              onChange={onChange}
              value={authValue.phone}
              className="auth-login__form-input"
              placeholder="+998 ( _ _ ) _ _ _  _ _  _ _"
              prefix={
                <PhoneOutlined
                  className={`auth-login__form-icon ${
                    isAuthValue.isPhone && "auth-login__form-icon--color"
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
              Kirish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
