import React from "react";
import PicCart from "./PicCart";
import Img1 from "../../../../../../assets/images/users/1.jpg";
import AddImage from "../../../../components/AddImage";

interface IProps {
 image :string
}
const EditCategoryPicture:React.FC<IProps> = ({image}) => {
  return (
    <div className="tab-pane active">
      <div className="p-20 container">
        <div className="row el-element-overlay">
          <div className="col-lg-3 col-md-6">
            <PicCart image={image} />
          </div>
          <AddImage url="/" />
        </div>
      </div>
    </div>
  );
};

export default EditCategoryPicture;
