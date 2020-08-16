import React from "react";
interface IProps {
  width?: string;
  height?: string;
}
const Centerise: React.FC<IProps> = ({ width, height, children }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width, height  }}
    >
      {children}
    </div>
  );
};
export default Centerise;
