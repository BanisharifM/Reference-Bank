import React from "react";
import Loading from "./Loading";
import Spinner from "./Spinner";
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
}
const Button: React.FC<IProps> = ({
  loading,
  onClick,
  text = "NOTEXT",
  type,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn waves-effect waves-light btn-${type}`}
      disabled={loading}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};
export default Button;
