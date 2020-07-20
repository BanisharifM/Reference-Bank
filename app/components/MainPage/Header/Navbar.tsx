import React from "react";
import Search from "./Search";
import NavbarLi from "../../shared/Navs/NavbarLi";
import NavbarDropDown from "../../shared/Navs/DropDownComps/NavbarDropDown";
import DropDownItem from "../../shared/Navs/DropDownComps/DropDownItem";
import DropDownLink from "../../shared/Navs/DropDownComps/DropDownLink";
import NavbarMegaMenu from "../../shared/Navs/MegaMenuComps/NavbarMegaMenu";
import MegaMenuLi from "../../shared/Navs/MegaMenuComps/MegaMenuLi";
import DropDownHeader from "../../shared/Navs/DropDownComps/DropDownHeader";
import HeaderBanner from "../../shared/Banner/HeaderBanner";
import HeaderBannerContent from "../../shared/Banner/HeaderBannerContent";
import BannerImage from "../../shared/Banner/BannerImage";
import UserStatus from "../../shared/Navs/HoverableCart/UserStatus";
import HoverableCart from "../../shared/Navs/HoverableCart";

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
            <NavbarLi itemName="خانه" />
            <NavbarDropDown itemName="بلاگ" reverse>
              <DropDownItem itemName="grids">
                <DropDownLink itemName="3 column" />
                <DropDownLink itemName="5 column" />
                <DropDownLink itemName="7 column" />
              </DropDownItem>
              <DropDownItem itemName="random">
                <DropDownItem itemName="wild babe">
                  <DropDownLink itemName="random22222" />
                </DropDownItem>
              </DropDownItem>
            </NavbarDropDown>
            <NavbarMegaMenu itemName="فروشگاه">
              <MegaMenuLi lg={9}>
                <ul className="d-lg-flex">
                    <MegaMenuLi xl={3} md={4}>
                      <ul>
                        <DropDownHeader itemName="لبنیات" />
                        <DropDownLink itemName="شیر" />
                        <DropDownLink itemName="ماست" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi xl={3} md={4}>
                      <ul>
                        <DropDownHeader itemName="خشکبار و تنقلات" />
                        <DropDownLink itemName="پسته" />
                        <DropDownLink itemName="بادام" />
                        <DropDownLink itemName="انجیر" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi xl={3} md={4}>
                      <ul>
                        <DropDownHeader itemName="محصولات کنسروی" />
                        <DropDownLink itemName="کنسرو ماهی" />
                        <DropDownLink itemName="کنسرو لوبیا" />
                        <DropDownLink itemName="کنسرو بادمجون" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi xl={3} md={4}>
                      <ul>
                        <DropDownHeader itemName="گوشت و فرآورده‌های پروتئینی" />
                        <DropDownLink itemName="گوشت" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi xl={3} md={4} >
                      <ul>
                        <DropDownHeader itemName="میوه و سبزیجات" />
                        <DropDownLink itemName="تره" />
                        <DropDownLink itemName="ریحون" />
                        <DropDownLink itemName="پیازچه" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi xl={3} md={4}>
                      <ul>
                        <DropDownHeader itemName="آشامیدنی و نوشیدنی" />
                        <DropDownLink itemName="آب" />
                        <DropDownLink itemName="دلستر" />
                        <DropDownLink itemName="نوشابه" />
                      </ul>
                    </MegaMenuLi>
                </ul>
              </MegaMenuLi>
              <MegaMenuLi lg={3}>
                <HeaderBanner>
                  <HeaderBannerContent>
                    <div className="shop_banner">
                      <BannerImage image="images/product_img1.png" />
                      <div className="shop_bn_content">
                        <h6 className="text-uppercase shop_subtitle">
                          پیشنهاد ویژه
                        </h6>
                        <a
                          href="#"
                          className="btn btn-white rounded-0 btn-xs text-uppercase"
                        >
                          همین حالا بخرید!
                        </a>
                      </div>
                    </div>
                  </HeaderBannerContent>
                </HeaderBanner>
              </MegaMenuLi>
            </NavbarMegaMenu>

            <NavbarLi itemName="تماس با ما" />
            <NavbarLi itemName="درباره ما" />
          </ul>
        </div>
        <ul className="navbar-nav attr-nav align-items-center">
          <Search />

          <HoverableCart />
          <UserStatus />
        </ul>
        {/* <div className="pr_search_icon">
          <a className="nav-link pr_search_trigger">
            <i className="linearicons-magnifier"></i>
          </a>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
