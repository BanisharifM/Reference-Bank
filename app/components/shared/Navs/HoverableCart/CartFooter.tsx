import React from "react";
export const CartFooter = () => {
  return (
    <div className="cart_footer">
      <p className="cart_total">
        <strong>جمع کل:</strong>{" "}
       10.400 
        <span className="cart_price">
          <span className="price_symbole"> تومان </span>
        </span>
      </p>
      <p className="cart_buttons">
        <a href="#" className="btn btn-fill-line view-cart">
          سبد خرید
        </a>
        <a href="#" className="btn btn-fill-out checkout">
          تکمیل سفارش
        </a>
      </p>
    </div>
  );
};
export default CartFooter;
