import React from "react";
import Slider from "react-slick";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="banner_section slide_medium shop_banner_slider staggered-animation-wrap"
      style={{ marginBottom: "30px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col offset-lg-2">
            <Slider {...settings}>
              <div>
                <div
                  style={{
                    background: "url('images/banner4.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="carousel-item active background_bg"
                ></div>
              </div>
              <div>
                <div
                  style={{
                    background: "url('images/banner5.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // border: "10px solid black",
                    // height: "400px",
                  }}
                  className="carousel-item active background_bg"
                ></div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="carousel-item background_bg">
<img src="/images/banner4.jpg" alt="" />
</div>
<div className="carousel-item background_bg">
<img src="/images/banner5.jpg" alt="" />
</div>
<div className="carousel-item background_bg">
<img src="/images/banner6.jpg" alt="" />
</div> */
}
export default MainSlider;
