import React from "react";
import { Button } from "../../ui/button";
type ButtonType = "submit" | "button";
interface ButtonProps {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}
const MyButton: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
