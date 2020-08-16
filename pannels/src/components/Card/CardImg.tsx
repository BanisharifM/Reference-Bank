import React, { useEffect, useState } from "react";
import { useModalDispatch } from "../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../services/contexts/ModalContext/models";
import Centerise from "../Centerise";
import PictureOverlayPreview from "../PictureOverlayPreview";
import Spinner from "../Spinner";
const CardImg: React.FC<{ src: string }> = ({ src }) => {
  const dispatch = useModalDispatch();
  const handleOpenPreview = () => {
    dispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: { component: PictureOverlayPreview, props: { image: src } },
    });
  };
  const [backgroundSrc, setBackgroundSrc] = useState("");
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => {
      setBackgroundSrc(src);
    };
  }, [src]);
  const defaultStyle = {
    width: "100%",
    height: "150px",
  };
  const backgroundStyle = {
    background: `url(${backgroundSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const activeStyle = backgroundSrc ? backgroundStyle : {};

  const styles = { ...defaultStyle, ...activeStyle };

  return (
    <>
      <div className="el-card-item pb-0">
        <div className="el-card-avatar el-overlay-1">
          <div style={styles}>
            {!backgroundSrc && (
              <Centerise width="100%" height="100%">
                <Spinner />
              </Centerise>
            )}
          </div>
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
