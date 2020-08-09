import React, { useState } from "react";
import Img1 from "../../../../assets/images/Slider/1.jpg";
import Img2 from "../../../../assets/images/Slider/2.jpg";
import Img3 from "../../../../assets/images/Slider/3.jpg";
import Img4 from "../../../../assets/images/Slider/4.jpg";
import AddImage from "../../../../components/AddImage";
import axios from "axios";
import SliderCard from "../../../../components/SliderCard";
import Main from "./components/Main";

interface ISliderImage {
  image: string;
  index: number;
}
const sliders: ISliderImage[] = [
  {
    image: Img1,
    index: 1,
  },
  {
    image: Img2,
    index: 2,
  },
  {
    image: Img3,
    index: 3,
  },
  {
    image: Img4,
    index: 4,
  },
];
const Index = () => {
  const [items, setItems] = useState<ISliderImage[]>(sliders);
  const handleDeleteItem = (id: number) => {};
  const handleSendSubmit = () => new Promise((res) => res);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h4 className="d-inline">اسلایدر شرکت</h4>
          <p className="text-muted m-t-0">
            میتوانید اسلایدر شرکت خود را به دلخواه تغییر دهید
          </p>
          <div className="row el-element-overlay">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
