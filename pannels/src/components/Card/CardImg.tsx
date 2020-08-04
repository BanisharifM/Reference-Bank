import React from "react";
import { useModalDispatch } from "../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../services/contexts/ModalContext/models";
import PictureOverlayPreview from "../PictureOverlayPreview";
const CardImg: React.FC<{ src: string }> = ({ src }) => {
  const dispatch = useModalDispatch();
  const handleOpenPreview = () => {
    dispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: { component: PictureOverlayPreview, props: { image: src } },
    });
  };
  return (
    <>
      <div className="el-card-item pb-0">
        <div className="el-card-avatar el-overlay-1">
          <div
            style={{
              width: "100%",
              height: "150px",
              background: `url(${src})`,
              backgroundSize: "cover",
            }}
          />
          <div className="el-overlay">
            <ul className="el-info">
              <li>
                <a
                  className="btn default btn-outline image-popup-vertical-fit"
                  onClick={handleOpenPreview}
                >
                  <i className="icon-magnifier"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardImg;
