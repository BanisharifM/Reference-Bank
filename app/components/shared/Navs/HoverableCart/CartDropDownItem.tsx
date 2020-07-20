import React from "react";
interface IProps {
  image: string;
  name: string;
  count: number;
  price: number;
}
export const CartDropDownItem: React.FC<IProps> = ({
  price,
  image,
  name,
  count,
}) => {
  return (
    <li>
      <a href="#" className="item_remove">
        <i className="ion-close"></i>
      </a>
      <a href="#">
        <img src={image} alt="cart_thumb1" />
        {name}
      </a>
      <span className="cart_quantity">
        {" "}
        {count} x{" "}
        <span className="cart_amount">
          {" "}
          <span className="price_symbole">$</span>
        </span>
        {price}
      </span>
    </li>
  );
};
export default CartDropDownItem;
