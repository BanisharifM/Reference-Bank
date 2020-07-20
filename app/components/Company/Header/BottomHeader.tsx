import React from "react";
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
import Search from "../../MainPage/Header/Search";
import UserStatus from "../../shared/Navs/HoverableCart/UserStatus";
import HoverableCart from "../../shared/Navs/HoverableCart";

export const BottomHeader = () => {
  return (
    <div className="bottom_header dark_skin main_menu_uppercase">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index.html">
            {/*
			  * brand image 
            <img
              className="logo_light"
              src="assets/images/logo_light.png"
              alt="logo"
            />
            <img
              className="logo_dark"
              src="assets/images/logo_dark.png"
              alt="logo"
            />
			  */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="ion-android-menu"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
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
                    <MegaMenuLi lg={4}>
                      <ul>
                        <DropDownHeader itemName="shop page layout" />
                        <DropDownLink itemName="shop list view" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi lg={4}>
                      <ul>
                        <DropDownHeader itemName="shop page layout" />
                        <DropDownLink itemName="shop list view" />
                      </ul>
                    </MegaMenuLi>
                    <MegaMenuLi lg={4}>
                      <ul>
                        <DropDownHeader itemName="shop page layout" />
                        <DropDownLink itemName="shop list view" />
                      </ul>
                    </MegaMenuLi>
                  </ul>
                </MegaMenuLi>
                <MegaMenuLi lg={3}>
                  <HeaderBanner>
                    <HeaderBannerContent>
                      <div className="shop_banner">
                        <BannerImage image="/images/product_img1.png" />
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
        </nav>
      </div>
    </div>
  );
};
export default BottomHeader;
