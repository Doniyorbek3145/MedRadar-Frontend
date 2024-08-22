import { Button, Form } from "antd";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import ReactCodeInput, { ReactCodeInputProps } from "react-code-input";
import { ClockIcon } from "assets/images/svg";

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

  const props: ReactCodeInputProps = {
    className: "my-code-input",
    inputStyle: {
      textAlign: "center",
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "100%",
      borderRadius: "3px",
      fontSize: "35px",
      height: "100px",
      backgroundColor: "transparent",
      color: "#002B48",
      border: "1px solid #EEF0F4",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      MozAppearance: "textfield",
      // width: "15px",
      borderRadius: "3px",
      fontSize: "14px",
      // height: "20px",
      // paddingLeft: "7px",
      backgroundColor: "red",
      color: "#002B48",
      border: "1px solid #EEF0F4",
    },
    type: "number", // Bu yerda type string emas, balki 'number' qiymatini oladi
    fields: 4,
    name: "my-code-input",
    inputMode: "numeric",
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
          <ReactCodeInput {...props} />

          <div className="auth-login__container">
            <div className="auth-login__box">
              <span className="auth-login__time">
                <img
                  width={22}
                  height={22}
                  alt="clock"
                  src={ClockIcon}
                  className="auth-login__time-icon"
                />
                <p className="auth-login__time-text">0:56</p>
              </span>
              <p className="auth-login__box-text">
                Parolni olmadingizmi?{" "}
                <span role="button" className="auth-login__box-span">
                  Qaytadan jo’natish
                </span>
              </p>
            </div>
          </div>
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
