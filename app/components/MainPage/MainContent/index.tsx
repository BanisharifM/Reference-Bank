import React from "react";
import SingleBanner from "./SingleBanner";

const MainContent = () => {
  return (
    <div className="main_content">
      <div className="section pb_20 small_pt">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SingleBanner
                image="/images/shop_banner_img1.png"
                title1="فروش فوق‌العاده"
                title2="شیرینی و شکلات"
                pathTo="/"
              />
            </div>
            <div className="col-md-6">
              <SingleBanner
                image="/images/shop_banner_img2.png"
                title1="کارخانه ها"
                title2="40% تخفیف"
                pathTo="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
