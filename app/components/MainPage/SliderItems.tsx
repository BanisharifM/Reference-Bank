import React from "react";

interface IProps {
	name :string
    image : string
	price :number 


}
const SliderItems:React.FC<IProps> = ({image,name ,price }) => {
  return (
      <div className="item mx-2" >
        <div className="product">
          <div className="product_img">
            <a href="shop-product-detail.html">
              <img src={image} alt="product_img4" />
            </a>
            <div className="product_action_box">
              <ul className="list_none pr_action_btn">
                <li className="add-to-cart">
                  <a href="#">
                    <i className="icon-basket-loaded"></i> افزودن به سبد خرید
                  </a>
                </li>
                <li>
                  <a
                    href="//bestwebcreator.com/shopwise/demo/shop-compare.html"
                    className="popup-ajax"
                  >
                    <i className="icon-shuffle"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="//bestwebcreator.com/shopwise/demo/shop-quick-view.html"
                    className="popup-ajax"
                  >
                    <i className="icon-magnifier-add"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-heart"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product_info">
            <h6 className="product_title">
              <a href="shop-product-detail.html">{name}</a>
            </h6>
            <div className="product_price">
				<span className="price">${(4*price/5).toFixed(3)}</span>
              <del>${price.toFixed(3)}</del>
              <div className="on_sale">
                <span>20% تخفیف</span>
              </div>
            </div>
            <div className="rating_wrap">
              <div className="rating">
                <div className="product_rate" style={{ width: "70%" }}></div>
              </div>
              <span className="rating_num">(22)</span>
            </div>
            <div className="pr_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
            <div className="pr_switch_wrap">
              <div className="product_color_switch">
                <span
                  className="active"
                  data-color="#333333"
                  style={{ backgroundColor: "rgb(51, 51, 51)" }}
                ></span>
                <span
                  data-color="#A92534"
                  style={{ backgroundColor: "rgb(169, 37, 52)" }}
                ></span>
                <span
                  data-color="#B9C2DF"
                  style={{ backgroundColor: "rgb(185, 194, 223)" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SliderItems;
