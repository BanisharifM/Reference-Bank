import React from "react";
import { useModalDispatch } from "../../../../../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../../../../../services/contexts/ModalContext/models";
import PictureOverlayPreview from "../../../../../../components/PictureOverlayPreview";

interface IProps {
  image: string;
}
const PicCart: React.FC<IProps> = ({ image }) => {
  const dispatch = useModalDispatch();
  const handleOpenPreview = () => {
    dispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: { component: PictureOverlayPreview, props: { image } },
    });
  };

  return (
    <>
      <div className="card">
        <div className="el-card-item">
          <div className="el-card-avatar el-overlay-1">
            <img src={image} alt="user" />
            <div className="el-overlay">
              <ul className="el-info">
                <li onClick={handleOpenPreview}>
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
    </>
  );
};

export default PicCart;
