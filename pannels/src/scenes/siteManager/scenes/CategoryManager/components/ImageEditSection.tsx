import React from "react";
import EditCategoryPicture from "./EditCategoryPicture";
import EditCategorySlider from "./EditCategorySlider";
import { ISliderImage } from "./Table/model";

const picCategory = "تصویر دسته بندی";
const sliderCategory = "اسلایدر دسته بندی";

interface IProps {
  activeItem: string;
  picture: string;
  slider: ISliderImage[];
  onChangeActiveItem: (item: string) => void;
}
const ImageEditSection: React.FC<IProps> = ({
  activeItem,
  picture , 
  slider,
  onChangeActiveItem,
}) => {
  const isActivePageOne = activeItem === picCategory;
  const isActivePageTwo = activeItem === sliderCategory;

  return (
    <div className="tab-content">
      {isActivePageOne && <EditCategoryPicture image={picture}/>}
      {isActivePageTwo && <EditCategorySlider  slider={slider}/>}
    </div>
  );
};

export default ImageEditSection;
