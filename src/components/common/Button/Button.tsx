import { Button, ButtonProps } from "antd";

interface buttonTypes {
  children: React.ReactNode;
}

const ButtonComponent = ({ children, ...props }: buttonTypes | ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
