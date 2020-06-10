import React from "react";
import Img1 from "../../../../../assets/images/add.png";

const AddImage = () => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="el-card-item">
          <div className="el-card-avatar el-overlay-1">
            <img src={Img1} alt="user" />
            <div className="el-overlay">
              <ul className="el-info">
                <li>
                  <a
                    className="btn default btn-outline image-popup-vertical-fit"
                    href="../assets/images/users/1.jpg"
                  >
                    <i className="icon-magnifier"></i>
                  </a>
                </li>
                <li>
                  <a className="btn default btn-outline" href="">
                    <i className="icon-link"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddImage;
