import React from "react";
import Slider from "react-slick";
import SliderItems from "../SliderItems";

const ExclusiveProductsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0, autoplay: true,
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
                <h2>محصولات </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <div>
                <SliderItems price={8.000}  name ='شیرنارگیل عالیس' image="/images/product_img1.png" />
              </div>
              <div>
                <SliderItems price={22.000} name='پرسیل' image="/images/product_img2.png" />
              </div>
              <div>
                <SliderItems price={5.000}  name ='شیر کم چرب'image="/images/product_img3.png" />
              </div>
              <div>
                <SliderItems price={25.000} name='تخم مرغ ۶ تایی' image="/images/product_img4.png" />
              </div>
              <div>
                <SliderItems price={30.000} name ='کرم بیسکوییت' image="/images/product_img5.png" />
              </div>
              <div>
                <SliderItems price={5.000}  name ='شیر کم چرب'image="/images/product_img3.png" />
              </div>
              <div>
                <SliderItems price={8.000}  name ='شیرنارگیل عالیس' image="/images/product_img1.png" />
              </div>
              <div>
                <SliderItems price={25.000} name='تخم مرغ ۶ تایی' image="/images/product_img4.png" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProductsSlider;
