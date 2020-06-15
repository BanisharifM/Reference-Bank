import React, { useState } from "react";
import Img1 from "../../../../../../assets/images/users/1.jpg";
import Img2 from "../../../../../../assets/images/users/2.jpg";
import Img3 from "../../../../../../assets/images/users/3.jpg";
import Img4 from "../../../../../../assets/images/users/4.jpg";
import SliderCards from "../../../../components/SliderCards";
import AddImage from "../../../../components/AddImage";
import { ISliderImage } from "../Table/model";

// interface ISliderImage {
//   image: string;
//   index: number;
// }

// const sliders: ISliderImage[] = [
//   {
//     image: Img1,
//     index: Math.random(),
//   },
//   {
//     image: Img2,
//     index: Math.random(),
//   },
//   {
//     image: Img3,
//     index: Math.random(),
//   },
//   {
//     image: Img4,
//     index: Math.random(),
//   },
// ];
interface IProps {
  slider: ISliderImage[];
}
const EditCategorySlider:React.FC<IProps> = ({slider}) => {
  const [items, setItems] = useState<ISliderImage[]>(slider);
  const handleDeleteItem = (id: number) => {
    const newItems = items.filter((item) => item.index !== id);
    setItems(newItems);
  };
  return (
    <div className="tab-pane active">
      <div className="p-20 container">
        <div className="row el-element-overlay">
          {items.map((item, index) => (
            <SliderCards {...item} onDelete={handleDeleteItem} />
          ))}
          <AddImage url="/" />
        </div>
      </div>
    </div>
  );
};

export default EditCategorySlider;
