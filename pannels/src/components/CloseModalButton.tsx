import React from "react";

interface IProps {
  handleCloseModal: () => void;
}
const CloseModalButton: React.FC<IProps> = ({ handleCloseModal }) => {
  return (
    <button
      type="button"
      className="btn btn-danger waves-effect text-left"
      onClick={handleCloseModal}
    >
      بستن
    </button>
  );
};

export default CloseModalButton;
