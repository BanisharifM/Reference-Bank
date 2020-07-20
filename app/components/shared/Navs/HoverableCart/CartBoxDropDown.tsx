import React from "react";
export const CartBoxDropDown: React.FC = ({ children }) => {
  return (
    <div className="cart_box dropdown-menu dropdown-menu-right">{children}</div>
  );
};
export default CartBoxDropDown;
