import { Result } from "antd";
import { Button } from "components";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="error">
      <Result
        title="404"
        status="404"
        className="error-page"
        subTitle="Kechirasiz, siz tashrif buyurgan sahifa mavjud emas."
        extra={
          <Button onClick={() => navigate("/")}>Bosh sahifaga qaytish</Button>
        }
      />
    </section>
  );
};

export default Error;
