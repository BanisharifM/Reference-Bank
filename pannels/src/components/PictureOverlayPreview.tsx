import React, { useRef } from "react";
import Img from "../assets/images/users/1.jpg";
import { EModalActionTypes } from "../services/contexts/ModalContext/models";
import { AppActions } from "../services/contexts/AppActions";
import { useOutsideClicker } from "../services/hooks/useOutsideClicker";

interface IProps {
  modalDispatcher: (actions: AppActions) => void;
  image: string;
}
const PictureOverlayPreview: React.FC<IProps> = ({
  modalDispatcher,
  image,
}) => {
  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };
  const mfpRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(mfpRef, handleCloseModal);
  return (
    <>
      <div className="mfp-bg mfp-img-mobile mfp-ready"></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-img-mobile mfp-ready"
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-image-holder">
          <div className="mfp-content" ref={mfpRef}>
            <div className="mfp-figure">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={handleCloseModal}
              >
                ×
              </button>
              <figure>
                <img
                  className="mfp-img"
                  src={image}
                  style={{ maxHeight: "729px" }}
                  alt="user-page"
                />
                <figcaption>
                  <div className="mfp-bottom-bar">
                    <div className="mfp-title"></div>
                    <div className="mfp-counter"></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </>
  );
};

export default PictureOverlayPreview;
