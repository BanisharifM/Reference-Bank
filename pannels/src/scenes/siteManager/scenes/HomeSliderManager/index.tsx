import React from "react";
import Img1 from "../../../../assets/images/Slider/1.jpg";
import Img2 from "../../../../assets/images/Slider/2.jpg";
import Img3 from "../../../../assets/images/Slider/3.jpg";
import Img4 from "../../../../assets/images/Slider/4.jpg";
import Main from "./components/Main";

const Index = () => {
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
