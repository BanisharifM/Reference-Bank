import React, { useRef } from "react";
import { EModalActionTypes } from "../services/contexts/ModalContext/models";
import { AppActions } from "../services/contexts/AppActions";
import { useOutsideClicker } from "../services/hooks/useOutsideClicker";

interface IProps {
  modalDispatcher: (actions: AppActions) => void;
}
const SampleModal: React.FC<IProps> = ({ modalDispatcher, ...rest }) => {
  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };

  const modalContentRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(modalContentRef, handleCloseModal);

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div id="myModal" className="modal show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content" ref={modalContentRef}>
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                Modal Heading
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info waves-effect"
                data-dismiss="modal"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleModal;
