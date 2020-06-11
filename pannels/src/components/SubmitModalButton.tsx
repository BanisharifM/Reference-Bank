import React from "react";
interface IProps {
  handleSubmitModal: () => void;
}

const SubmitModalButton: React.FC<IProps> = ({ handleSubmitModal }) => {
  return (
    <button
      type="button"
      className="btn btn-success waves-effect text-left"
      onClick={handleSubmitModal}
    >
      ویرایش
    </button>
  );
};

export default SubmitModalButton;
