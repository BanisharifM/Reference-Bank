import React from "react";
import Spinner from "./Spinner";

interface IProps {
  icon?: string;
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
  size?: "lg" | "xl";
  className?: string;
}

export const CircleButton: React.FC<IProps> = ({
  type,
  onClick,
  loading,
  icon,
  size,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-${type} btn-circle btn-${size} ${className}`}
    >
      {loading ? <Spinner /> : <i className={icon}></i>}
    </button>
  );
};
