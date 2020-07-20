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
      <span className="cart_quantity d-flex align-items-center justify-content-between">
        <span className="cart_amount  ">
          {price.toFixed(3)}
          <span className="price_symbole"> تومان</span>
        </span>
        <span> ×{count}</span>
      </span>
    </li>
  );
};
export default CartDropDownItem;
