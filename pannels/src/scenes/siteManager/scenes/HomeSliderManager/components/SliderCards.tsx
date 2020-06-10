import React from "react";

interface IProps {
  image: string;
}
const SliderCards: React.FC<IProps> = ({ image }) => {
  return (
    <div className="col-lg-2 col-md-4">
      <a href="../assets/images/big/img1.jpg" data-effect="mfp-zoom-in">
        <img src={image} className="img-responsive" />
        <br />
        Zoom
      </a>
    </div>
    // <div className="col-lg-3 col-md-6">
    //   <div className="card">
    //     <div className="el-card-item">
    //       <div className="el-card-avatar el-overlay-1">
    //         <img src={image} alt="user" />
    //         <div className="el-overlay">
    //           <ul className="el-info">
    //             <li>
    //               <a
    //                 className="btn default btn-outline image-popup-vertical-fit"
    //                 href="../assets/images/users/1.jpg"
    //               >
    //                 <i className="icon-magnifier"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a className="btn default btn-outline" href="">
    //                 <i className="icon-link"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="el-card-content">
    //         <h4 className="box-title">Genelia Deshmukh</h4>
    //         <button
    //           type="button"
    //           className="btn waves-effect waves-light btn-rounded btn-danger"
    //         >
    //           Danger
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SliderCards;
