import React from "react";

interface IProps {
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
}
const CustomeButton: React.FC<IProps> = ({ disabled, type, text, onClick }) => {
  return (
    <div className="form-group">
      <button
        type={type}
        className="btn btn-fill-out btn-block"
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomeButton;
