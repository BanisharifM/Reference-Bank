import React from "react";

interface IProps {
  image: string;
}
const PicCart: React.FC<IProps> = ({ image }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="el-card-item">
          <div className="el-card-avatar el-overlay-1">
            <img src={image} alt="user" />
            <div className="el-overlay">
              <ul className="el-info">
                <li>
                  <a className="btn default btn-outline image-popup-vertical-fit">
                    <i className="icon-magnifier"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="el-card-content">

          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PicCart;
