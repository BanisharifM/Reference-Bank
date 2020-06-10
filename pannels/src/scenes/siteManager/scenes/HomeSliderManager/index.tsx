import React from "react";
import Img1 from "../../../../assets/images/users/1.jpg";
import SliderCards from "./components/SliderCards";
import AddImage from "./components/AddImage";

const index = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div id="image-popups" className="row">
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
            <SliderCards image={Img1} />
          </div>
        </div>
      </div>
      {/* <div className="row el-element-overlay">
        <div className="col-md-12">
          <h4 className="card-title">اسلایدر</h4>
        </div>

        <SliderCards image={Img1} />
        <SliderCards image={Img1} />
        <SliderCards image={Img1} />
        <SliderCards image={Img1} />
        <SliderCards image={Img1} />
        <SliderCards image={Img1} />
        <AddImage />
      </div> */}
    </>
  );
};

export default index;
