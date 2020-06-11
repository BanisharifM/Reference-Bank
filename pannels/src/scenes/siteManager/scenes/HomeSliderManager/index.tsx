import React, { useState } from "react";
import Img1 from "../../../../assets/images/users/1.jpg";
import Img2 from "../../../../assets/images/users/2.jpg";
import Img3 from "../../../../assets/images/users/3.jpg";
import Img4 from "../../../../assets/images/users/4.jpg";
import SliderCards from "./components/SliderCards";
import AddImage from "./components/AddImage";

interface ISliderImage {
  image: string;
  index: number;
}
const sliders: ISliderImage[] = [
  {
    image: Img1,
    index: Math.random(),
  },
  {
    image: Img2,
    index: Math.random(),
  },
  {
    image: Img3,
    index: Math.random(),
  },
  {
    image: Img4,
    index: Math.random(),
  },
];
const Index = () => {
  const [items, setItems] = useState<ISliderImage[]>(sliders);
  const handleDeleteItem = (id: number) => {
    const newItems = items.filter((item) => item.index !== id);
    setItems(newItems);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          {/* <div id="image-popups" className="row"> */}
          <div className="row el-element-overlay">
            {items.map((item, index) => (
              <SliderCards {...item} onDelete={handleDeleteItem} />
            ))}
            <AddImage />
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

export default Index;
