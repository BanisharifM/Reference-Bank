import React from "react";
import Slider from "react-slick";
import SliderItems from "../SliderItems";

const ExclusiveProductsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section small_pb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading_tab_header">
              <div className="heading_s2">
                <h2>محصولات انحصاری</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <div>
                <SliderItems image="/images/product_img1.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img2.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img3.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img4.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img5.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img6.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img7.jpg" />
              </div>
              <div>
                <SliderItems image="/images/product_img8.jpg" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProductsSlider;
