import React, { useState } from "react";
import Img1 from "../../../../assets/images/Slider/1.jpg";
import Img2 from "../../../../assets/images/Slider/2.jpg";
import Img3 from "../../../../assets/images/Slider/3.jpg";
import Img4 from "../../../../assets/images/Slider/4.jpg";
import SliderCards from "../../components/SliderCards";
import AddImage from "../../components/AddImage";
import axios from "axios";
import Cookie from "js-cookie";

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
  const handleDeleteItem = (id: number) => {
    const newItems = items.filter((item) => item.index !== id);
    setItems(newItems);
  };
  const handleClick = () => {
	// fetch("/auth/login/", {
	//   method: "POST",
	//   body: JSON.stringify({ username: "admin", password: "admin" }),
	//   headers: {
	//     "Content-Type": "application/json",
	//   },
	// }).then((res) => {
	//   console.log(res.json());
	// });
    // console.log("here");
	axios
	.post("/auth/login/", { username: "admin", password: "admin" })
	  .then((res) => console.log(res));
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          {/* <div id="image-popups" className="row"> */}
          <div className="row el-element-overlay">
            {items.map((item, index) => (
              <SliderCards
                key={item.index}
                {...item}
                onDelete={handleDeleteItem}
              />
            ))}
            <AddImage url="/" />
          </div>
        </div>
        <button onClick={handleClick}>adkgfjadgjkakdjgkadjgjkadjgk</button>
      </div>
    </>
  );
};

export default Index;
