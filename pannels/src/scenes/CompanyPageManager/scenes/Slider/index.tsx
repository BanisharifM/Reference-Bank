import React from "react";
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
