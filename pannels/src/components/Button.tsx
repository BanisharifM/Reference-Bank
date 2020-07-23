import React from "react";
interface IProps {
  text?: string;
  type:
    | "primary"
    | "success"
    | "secondary"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark";
}
const Button: React.FC<IProps> = ({ text ="NOTEXT", type }) => {
  return (
    <button
      type="button"
      className={`btn waves-effect waves-light btn-${type}`}
    >
      {text}
    </button>
  );
};
export default Button
