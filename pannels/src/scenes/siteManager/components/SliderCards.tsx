import React, { useState } from "react";
import { useModalDispatch } from "../../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../../services/contexts/ModalContext/models";
import PictureOverlayPreview from "../../../components/PictureOverlayPreview";
import Button from "../../../components/Button";

interface IProps {
  image: string;
  index: number;
  onDelete: (id: number) => Promise<any>;
}
const SliderCards: React.FC<IProps> = ({ index, image, onDelete }) => {
  const [sureDelete, setSureDelete] = useState(false);

  const handleSetSure = () => {
    setSureDelete(true);
  };
  const handleDiscaredDelete = () => {
    setSureDelete(false);
  };
  const handleDelete = async () => {
    try {
      await onDelete(index);
    } catch (e) {
    } 
  };
  const dispatch = useModalDispatch();
  const handleOpenPreview = () => {
    dispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: { component: PictureOverlayPreview, props: { image } },
    });
  };
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card">
        <div className="el-card-item">
          <div className="el-card-avatar el-overlay-1">
            <img src={image} alt="user" style={{ minHeight: "150px" }} />
            <div className="el-overlay">
              <ul className="el-info">
                <li>
                  <a
                    className="btn default btn-outline image-popup-vertical-fit"
                    // href="../assets/images/users/1.jpg"
                    onClick={handleOpenPreview}
                  >
                    <i className="icon-magnifier"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="el-card-content">
            <h4 className="box-title">شماره {index}</h4>
            {!sureDelete ? (
              <button
                type="button"
                className="btn waves-effect waves-light btn-danger"
                onClick={handleSetSure}
              >
                حذف
              </button>
            ) : (
              <>
                <Button
                  type="success"
                  className="m-r-10"
                  text="بله"
                  onClick={handleDelete}
                />
                <Button
                  type="warning"
                  text="خیر "
                  onClick={handleDiscaredDelete}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    // <div className="col-lg-2 col-md-6 img-responsive">
    //   <div className="card">
    //     <img
    //       className="card-img-top img-responsive"
    //       src={image}
    //       alt="Card cap"
    //     />
    //     <div className="card-body">
    //       <div className="card-title">
    //         <h4>شماره {index}</h4>
    //       </div>
    //       <button className="btn btn-danger">حذف</button>
    //     </div>
    //   </div>
    // </div>

    // <div className="col-lg-2 col-md-4">
    //   <a href="../assets/images/big/img1.jpg" data-effect="mfp-zoom-in">
    //     <img src={image} className="img-responsive" />
    //     <br />
    //     Zoom
    //   </a>
    // </div>
  );
};

export default SliderCards;
