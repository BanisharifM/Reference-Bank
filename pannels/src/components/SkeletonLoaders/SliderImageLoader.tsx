import React from "react";
import ContentLoader from "react-content-loader";

const SliderImageLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="22" y="9" rx="0" ry="0" width="223" height="154" />
    <rect x="170" y="193" rx="0" ry="0" width="73" height="42" />
  </ContentLoader>
);

export default SliderImageLoader;
