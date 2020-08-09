import React from "react";
import SliderImageLoader from "./SkeletonLoaders/SliderImageLoader";

const SliderLoaders = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-3">
        <SliderImageLoader />
      </div>
      <div className="col-md-6 col-lg-3">
        <SliderImageLoader />
      </div>
      <div className="col-md-6 col-lg-3">
        <SliderImageLoader />
      </div>
      <div className="col-md-6 col-lg-3">
        <SliderImageLoader />
      </div>
    </div>
  );
};
export default SliderLoaders
