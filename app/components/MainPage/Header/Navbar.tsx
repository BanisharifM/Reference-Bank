import React from "react";
import Search from "./Search";
import Link from "next/link";
import NavbarLi from "../../shared/Navs/NavbarLi";
import NavbarDropDown from "../../shared/Navs/DropDownComps/NavbarDropDown";
import DropDownItem from "../../shared/Navs/DropDownComps/DropDownItem";
import DropDownLink from "../../shared/Navs/DropDownComps/DropDownLink";

const Navbar = () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-6 col-9">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler side_navbar_toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSidetoggle"
          aria-expanded="false"
        >
          <span className="ion-android-menu"></span>
        </button>
        <div
          className="collapse navbar-collapse mobile_side_menu"
          id="navbarSidetoggle"
        >
          <ul className="navbar-nav">
			  <NavbarLi itemName='خانه' />
			  <NavbarDropDown itemName='بلاگ' reverse >
				  <DropDownItem itemName="grids">
					  <DropDownLink itemName="3 column"/>
					  <DropDownLink itemName="5 column"/>
					  <DropDownLink itemName="7 column"/>
				  </DropDownItem>
				  <DropDownItem itemName="random" >
					  <DropDownItem itemName="wild babe">
					  <DropDownLink itemName="random22222"/>
					  </DropDownItem>
				  </DropDownItem>
			  </NavbarDropDown>

            <li className="dropdown dropdown-mega-menu">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                data-toggle="dropdown"
              >
                فروشگاه
              </a>
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-9">
                    <ul className="d-lg-flex">
                      <li className="mega-menu-col col-lg-4">
                        <ul>
                          <li className="dropdown-header">Shop Page Layout</li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-list.html"
                            >
                              shop List view
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-list-left-sidebar.html"
                            >
                              shop List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-list-right-sidebar.html"
                            >
                              shop List Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-load-more.html"
                            >
                              Shop Load More
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-4">
                        <ul>
                          <li className="dropdown-header">Other Pages</li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-cart.html"
                            >
                              Cart
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="checkout.html"
                            >
                              Checkout
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="wishlist.html"
                            >
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="compare.html"
                            >
                              compare
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="order-completed.html"
                            >
                              Order Completed
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-4">
                        <ul>
                          <li className="dropdown-header">Product Pages</li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-product-detail.html"
                            >
                              Default
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-product-detail-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-product-detail-right-sidebar.html"
                            >
                              Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="shop-product-detail-thumbnails-left.html"
                            >
                              Thumbnails Left
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <div className="header_banner">
                      <div className="header_banner_content">
                        <div className="shop_banner">
                          <div className="banner_img overlay_bg_40">
                            <img
                              src="assets/images/shop_banner2.jpg"
                              alt="shop_banner2"
                            />
                          </div>
                          <div className="shop_bn_content">
                            <h6 className="text-uppercase shop_subtitle">
                              New Collection
                            </h6>
                            <h5 className="text-uppercase shop_title">
                              Sale 30% Off
                            </h5>
                            <a
                              href="#"
                              className="btn btn-white rounded-0 btn-xs text-uppercase"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="nav-link nav_item" href="contact.html">
                تماس با ما
              </a>
            </li>
            <li>
              <a className="nav-link nav_item" href="about.html">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav attr-nav align-items-center">
          <li>
            <Search />
          </li>
          <li className="dropdown cart_dropdown">
            <a
              className="nav-link cart_trigger"
              href="#"
              data-toggle="dropdown"
            >
              <i className="linearicons-cart"></i>
              <span className="cart_count">2</span>
            </a>
            <div className="cart_box dropdown-menu dropdown-menu-right">
              <ul className="cart_list">
                <li>
                  <a href="#" className="item_remove">
                    <i className="ion-close"></i>
                  </a>
                  <a href="#">
                    <img src="images/product_img2.png" alt="cart_thumb1" />
                    Variable product 001
                  </a>
                  <span className="cart_quantity">
                    {" "}
                    1 x{" "}
                    <span className="cart_amount">
                      {" "}
                      <span className="price_symbole">$</span>
                    </span>
                    78.00
                  </span>
                </li>
                <li>
                  <a href="#" className="item_remove">
                    <i className="ion-close"></i>
                  </a>
                  <a href="#">
                    <img src="images/product_img1.png" alt="cart_thumb2" />
                    Ornare sed consequat
                  </a>
                  <span className="cart_quantity">
                    {" "}
                    1 x{" "}
                    <span className="cart_amount">
                      {" "}
                      <span className="price_symbole">$</span>
                    </span>
                    81.00
                  </span>
                </li>
              </ul>
              <div className="cart_footer">
                <p className="cart_total">
                  <strong>جمع کل:</strong>{" "}
                  <span className="cart_price">
                    {" "}
                    <span className="price_symbole">$</span>
                  </span>
                  159.00
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
            </div>
          </li>
          <li>
            <Link href="/login">
              <a className="nav-link">
                <i className="linearicons-user"></i>
              </a>
            </Link>
          </li>
        </ul>
        <div className="pr_search_icon">
          <a className="nav-link pr_search_trigger">
            <i className="linearicons-magnifier"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
