import React from "react";

const MainContent = () => {
  return (
    <div className="main_content">
      <div className="section pb_20 small_pt">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single_banner">
                <img
                  src="/images/shop_banner_img1.png"
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
                  src="/images/shop_banner_img2.png"
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
  );
};

export default MainContent;
