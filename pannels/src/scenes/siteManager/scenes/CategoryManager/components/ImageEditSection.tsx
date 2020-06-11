import React from "react";
import EditCategoryPicture from "./EditCategoryPicture";
import EditCategorySlider from "./EditCategorySlider";


const picCategory = "تصویر دسته بندی";
const sliderCategory = "اسلایدر دسته بندی";


interface IProps {
  activeItem: string;
  onChangeActiveItem: (item: string) => void;
}
const ImageEditSection: React.FC<IProps> = ({
  activeItem,
  onChangeActiveItem,
}) => {
  const isActivePageOne = activeItem === picCategory;
  const isActivePageTwo = activeItem === sliderCategory;

  return (
    <div className="tab-content">
      {isActivePageOne && <EditCategoryPicture />}
      {isActivePageTwo && <EditCategorySlider />}
    </div>
  );
};

export default ImageEditSection;
