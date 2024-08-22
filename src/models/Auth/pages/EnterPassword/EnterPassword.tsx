import { Button, Form } from "antd";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";

const EnterPassword = () => {
  const navigate = useNavigate();

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    navigate("/");
    localStorage.setItem("token", "asdasd");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="auth-login">
      <h1 className="visually-hidden">MedRadar Enter password</h1>
      <div className="auth-login__background">
        <div className="auth-login__content">
          <h2 className="auth-login__content-title">Parolni kiriting</h2>
          <p className="auth-login__content-text">
            <strong>99 555 00 55</strong> raqamiga yuborilgan 4 xonali parolni
            kiriting
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

export default EnterPassword;
