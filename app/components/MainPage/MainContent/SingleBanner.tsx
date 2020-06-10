import React from "react";
import Link from "next/link";

interface IProps {
  image: string;
  title1: string;
  title2: string;
  pathTo: string;
}
const SingleBanner: React.FC<IProps> = ({ image, title1, title2, pathTo }) => {
  return (
    <div className="single_banner mt-5">
      <img src={image} alt={image.split("/")[1].split(".")[0]} />
      <div className="single_banner_info">
        <h5 className="single_bn_title1 text-center">{title1}</h5>
        <h3 className="single_bn_title text-center">{title2}</h3>
        <Link href={pathTo}>
          <a className="single_bn_link">همین الان خرید کنید</a>
        </Link>
      </div>
    </div>
  );
};

export default SingleBanner;
