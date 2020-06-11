import React from "react";
import PicCart from "./PicCart";
import Img1 from "../../../../../assets/images/users/1.jpg";
import AddImage from "../../../components/AddImage";

const EditCategoryPicture = () => {
  return (
    <div className="tab-pane active">
      <div className="p-20 container">
        <div className="row el-element-overlay">
          <PicCart image={Img1} />
          <AddImage url="/" />
        </div>
      </div>
    </div>
  );
};

export default EditCategoryPicture;
