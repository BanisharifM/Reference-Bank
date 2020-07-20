import React from "react";
interface IProps {
  cartCount: number;
}
export const CartTrigger: React.FC<IProps> = ({ cartCount }) => {
  return (
    <a className="nav-link cart_trigger">
      <i className="linearicons-cart"></i>
      <span className="cart_count">{cartCount}</span>
    </a>
  );
};
export default CartTrigger;
