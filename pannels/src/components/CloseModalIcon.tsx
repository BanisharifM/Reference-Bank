import React from "react";

interface IProps {
  handleCloseModal: () => void;
}
const CloseModalIcon: React.FC<IProps> = ({ handleCloseModal }) => {
  return (
    <button
      type="button"
      className="close"
      data-dismiss="modal"
      aria-hidden="true"
      onClick={handleCloseModal}
    >
      ×
    </button>
  );
};

export default CloseModalIcon;
