import React from "react";
import Head from "next/head";

export const index = () => {
  return (
    <>

      <header className="header_wrap">
        <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-3">
                <div className="categories_wrap">
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#navCatContent"
                    aria-expanded="false"
                    className="categories_btn"
                  >
                    <i className="linearicons-menu"></i>
                    <span>همه دسته بندی ها</span>
                  </button>
                  <div id="navCatContent" className="nav_cat navbar collapse">
                    <ul>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-woman"></i> <span>زنانه</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <img
                                  src="../public/images/menu_banner1.jpg"
                                  alt="menu_banner1"
                                />
                                <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>New Arrival</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                              <div className="header-banner2">
                                <img
                                  src="../public/images/menu_banner2.jpg"
                                  alt="menu_banner2"
                                />
                                <div className="banne_info">
                                  <h6>15% Off</h6>
                                  <h4>Men's Fashion</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-boss"></i> <span>مردانه</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <a href="#">
                                  <img
                                    src="../public/images/menu_banner4.jpg"
                                    alt="menu_banner4"
                                  />
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-friendship"></i>{" "}
                          <span>بچگانه</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <a href="#">
                                  <img
                                    src="../public/images/menu_banner5.jpg"
                                    alt="menu_banner5"
                                  />
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-sunglasses"></i>{" "}
                          <span>تجهیزات جانبی</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-4">
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
                            <li className="mega-menu-col col-lg-4">
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
                            <li className="mega-menu-col col-lg-4">
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
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="coming-soon.html"
                        >
                          <i className="flaticon-jacket"></i>{" "}
                          <span>تن پوش</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="404.html"
                        >
                          <i className="flaticon-sneakers"></i> <span>کفش</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="login.html"
                        >
                          <i className="flaticon-watch"></i> <span>ساعت</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="register.html"
                        >
                          <i className="flaticon-necklace"></i>{" "}
                          <span>جواهرات</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="coming-soon.html"
                        >
                          <i className="flaticon-herbal"></i>{" "}
                          <span>سلامت و زیبایی</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="404.html"
                        >
                          <i className="flaticon-ball"></i> <span>ورزشی</span>
                        </a>
                      </li>
                      <li>
                        <ul className="more_slide_open">
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="login.html"
                            >
                              <i className="flaticon-pijamas"></i>{" "}
                              <span>Sleepwear</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="register.html"
                            >
                              <i className="flaticon-scarf"></i>{" "}
                              <span>Seasonal Wear</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="404.html"
                            >
                              <i className="flaticon-vintage"></i>{" "}
                              <span>Ethinic Wear</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="coming-soon.html"
                            >
                              <i className="flaticon-pregnant"></i>{" "}
                              <span>Baby Clothing</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="more_categories">دسته بندی بیشتر</div>
                  </div>
                </div>
              </div>
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
                      <li>
                        <a className="nav-link nav_item" href="index-2.html">
                          خانه
                        </a>
                      </li>

                      <li className="dropdown">
                        <a
                          className="dropdown-toggle nav-link"
                          href="#"
                          data-toggle="dropdown"
                        >
                          بلاگ
                        </a>
                        <div className="dropdown-menu dropdown-reverse">
                          <ul>
                            <li>
                              <a
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Grids
                              </a>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-three-columns.html"
                                    >
                                      3 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-four-columns.html"
                                    >
                                      4 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-left-sidebar.html"
                                    >
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-right-sidebar.html"
                                    >
                                      right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-left-sidebar.html"
                                    >
                                      Standard Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-right-sidebar.html"
                                    >
                                      Standard right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Masonry
                              </a>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-three-columns.html"
                                    >
                                      3 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-four-columns.html"
                                    >
                                      4 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-left-sidebar.html"
                                    >
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Single Post
                              </a>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single.html"
                                    >
                                      Default
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-left-sidebar.html"
                                    >
                                      left sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-slider.html"
                                    >
                                      slider post
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-video.html"
                                    >
                                      video post
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-audio.html"
                                    >
                                      audio post
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                List
                              </a>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      left sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      right sidebar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
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
                                    <li className="dropdown-header">
                                      Shop Page Layout
                                    </li>
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
                                    <li className="dropdown-header">
                                      Other Pages
                                    </li>
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
                                    <li className="dropdown-header">
                                      Product Pages
                                    </li>
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
                      <a href="#" className="nav-link">
                        <i className="linearicons-user"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        <i className="linearicons-heart"></i>
                        <span className="wishlist_count">0</span>
                      </a>
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
                              <img
                                src="../public/images/cart_thamb1.jpg"
                                alt="cart_thumb1"
                              />
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
                              <img
                                src="../public/images/cart_thamb2.jpg"
                                alt="cart_thumb2"
                              />
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
                            <strong>Subtotal:</strong>{" "}
                            <span className="cart_price">
                              {" "}
                              <span className="price_symbole">$</span>
                            </span>
                            159.00
                          </p>
                          <p className="cart_buttons">
                            <a href="#" className="btn btn-fill-line view-cart">
                              View Cart
                            </a>
                            <a href="#" className="btn btn-fill-out checkout">
                              Checkout
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="pr_search_icon">
                    <a
                      href="javascript:void(0);"
                      className="nav-link pr_search_trigger"
                    >
                      <i className="linearicons-magnifier"></i>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main_content">
        <div className="section pb_20 small_pt">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single_banner">
                  <img
                    src="../public/images/shop_banner_img1.png"
                    alt="shop_banner_img1"
                  />
                  <div className="single_banner_info">
                    <h5 className="single_bn_title1 text-center">
                      فروش فوق العاده
                    </h5>
                    <h3 className="single_bn_title text-center">شیرنی شکلات</h3>
                    <a href="shop-left-sidebar.html" className="single_bn_link">
                      همین الان خرید کنید
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single_banner">
                  <img
                    src="../public/images/shop_banner_img2.png"
                    alt="shop_banner_img2"
                  />
                  <div className="single_banner_info">
                    <h3 className="single_bn_title text-center">کارخانه ها</h3>
                    <h4 className="single_bn_title1 text-center">40% تخفیف</h4>
                    <a href="shop-left-sidebar.html" className="single_bn_link">
                      همین الان خرید کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer_dark">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="widget">
                  <h6 className="widget_title">اطلاعات تماس</h6>
                  <ul className="contact_info contact_info_light">
                    <li>
                      <i className="ti-location-pin"></i>
                      <p>اصفهان- دروازه تهران- خیابان باهنر</p>
                    </li>
                    <li>
                      <i className="ti-email"></i>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </li>
                    <li>
                      <i className="ti-mobile"></i>
                      <p>+989140761390</p>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <ul className="social_icons rounded_social">
                    <li>
                      <a href="#" className="sc_facebook">
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_twitter">
                        <i className="ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_google">
                        <i className="ion-social-googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_youtube">
                        <i className="ion-social-youtube-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_instagram">
                        <i className="ion-social-instagram-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">پیوندها</h6>
                  <ul className="widget_links">
                    <li>
                      <a href="#">درباره ما</a>
                    </li>
                    <li>
                      <a href="#">موقعیت</a>
                    </li>
                    <li>
                      <a href="#">تماس با ما</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">حساب من</h6>
                  <ul className="widget_links">
                    <li>
                      <a href="#">حساب من</a>
                    </li>
                    <li>
                      <a href="#">خارج شده</a>
                    </li>
                    <li>
                      <a href="#">برگشت</a>
                    </li>
                    <li>
                      <a href="#">تاریخچه سفارشات</a>
                    </li>
                    <li>
                      <a href="#">سفارشات ثبت شده</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget">
                  <h6 className="widget_title">در خبرنامه ما عضو شوید</h6>
                  <p>
                    اگر می خواهید هر بار پیشنهاد ویژه جدیدی از ما ایمیل بگیرید ،
                    پس از آن وارد شوید!
                  </p>
                  <div className="newsletter_form rounded_input">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ایمیل را وارد کنید"
                      />
                      <button
                        type="submit"
                        className="btn-send"
                        name="submit"
                        value="Submit"
                      >
                        <i className="icon-envelope-letter"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer border-top-tran">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <p className="mb-md-0 text-center text-md-center">
                  تمام حقوق این سایت محفوظ است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default index

// import Head from "next/head";
// import { wrapper } from "../redux";
// import axios from "axios";
// import { axiosInstance } from "../services/axios/axios";
// import { useState, useEffect } from "react";
// import Cookie from "js-cookie";
// import { ParsCookies } from "../services/Cookie/cookie";
// import Router from "next/router";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/stores/user/userActions";
// import { IStore } from "../redux/models/IStore";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const user = useSelector((state: IStore) => state.user.client);
//   const handleSubmit = () => {
//     axios
//       .post("https://api.restino.ir/accounts/api/v1/authenticate/", {
//         username,
//         password,
//       })
//       .then((res) => {
//         Cookie.set("refresh", res.data.refresh);
//         Cookie.set("access", res.data.access);
//         dispatch(loginUser());
//       });
//   };
//   useEffect(() => {
//     if (user.isAuth) Router.push("/shop");
//   }, [user.isAuth]);
//   return (
//     <div className="container">
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.currentTarget.value)}
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.currentTarget.value)}
//       />
//       <button onClick={handleSubmit}>login</button>
//       {user.isLoading && <p>is Loading</p>}
//     </div>
//   );
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, preview, req }) => {
//     const cookie = ParsCookies(req);
//     // console.log("2. Page.getStaticProps uses the store to dispatch things");
//     // const data = await api.login.loginUser("09213198172", "@1378Alisajad");
//     // const { data } = await axiosInstance.get("/profile/");
//   }
// );
