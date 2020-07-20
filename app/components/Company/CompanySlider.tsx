import React from "react";
import Slider from "react-slick";

const CompanySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          style={{
            background: "url('/images/kaleh1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition:'center',
            height :'400px'
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            background: "url('/images/kaleh2.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height :'400px'
          }}
        ></div>
      </div>
    </Slider>
  );
};

export default CompanySlider;
