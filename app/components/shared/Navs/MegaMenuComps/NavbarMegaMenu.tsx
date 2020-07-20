import React from "react";
import DropDownMainTitle from "../DropDownComps/DropDownMainTitle";
import MegaMenuLi from "./MegaMenuLi";
import DropDownHeader from "../DropDownComps/DropDownHeader";
import DropDownItem from "../DropDownComps/DropDownItem";


interface IProps {
	itemName :string
}
const NavbarMegaMenu:React.FC<IProps> = ({children,itemName}) => {
  return (
    <li className="dropdown dropdown-mega-menu">
		<DropDownMainTitle itemName={itemName}/>
      <div className="dropdown-menu">
        <ul className="mega-menu d-lg-flex">
			{children}


        </ul>
      </div>
    </li>
  );
};
export default NavbarMegaMenu;
{/*  
<li className="dropdown dropdown-mega-menu">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  Products
                </a>
                <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Woman's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-list-left-sidebar.html"
                          >
                            Vestibulum sed
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-left-sidebar.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-right-sidebar.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-list.html"
                          >
                            Curabitur tempus
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-load-more.html"
                          >
                            Vivamus in tortor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Men's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-cart.html"
                          >
                            Donec vitae ante ante
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="checkout.html"
                          >
                            Etiam ac rutrum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="wishlist.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="compare.html"
                          >
                            Curabitur laoreet
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="order-completed.html"
                          >
                            Vivamus in tortor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Kid's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-left-sidebar.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-right-sidebar.html"
                          >
                            Etiam ac rutrum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec vitae ante ante
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Accessories</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-left-sidebar.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-right-sidebar.html"
                          >
                            Etiam ac rutrum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec vitae ante ante
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="d-lg-flex menu_banners">
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src="assets/images/menu_banner1.jpg"
                          alt="menu_banner1"
                        />
                        <div className="banne_info">
                          <h6>10% Off</h6>
                          <h4>New Arrival</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src="assets/images/menu_banner2.jpg"
                          alt="menu_banner2"
                        />
                        <div className="banne_info">
                          <h6>15% Off</h6>
                          <h4>Men's Fashion</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src="assets/images/menu_banner3.jpg"
                          alt="menu_banner3"
                        />
                        <div className="banne_info">
                          <h6>23% Off</h6>
                          <h4>Kids Fashion</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
  */}
