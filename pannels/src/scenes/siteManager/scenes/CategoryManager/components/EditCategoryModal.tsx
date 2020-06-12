import React, { useRef, useState } from "react";
import { EModalActionTypes } from "../../../../../services/contexts/ModalContext/models";
import { useOutsideClicker } from "../../../../../services/hooks/useOutsideClicker";
import { AppActions } from "../../../../../services/contexts/AppActions";
import CloseModalIcon from "../../../../../components/CloseModalIcon";
import CloseModalButton from "../../../../../components/CloseModalButton";
import EditChangeName from "./EditChangeName";
import NavTabs from "./NavTabs";
import ImageEditSection from "./ImageEditSection";
import SubmitModalButton from "../../../../../components/SubmitModalButton";
import { ISliderImage, ICategory } from "./Table/model";
//-----------------------------------------------------------------
interface IProps {
  modalDispatcher: (actions: AppActions) => void;
}

const EditCategoryModal: React.FC<IProps & ICategory> = ({
  modalDispatcher,
  id,
  name,
  image,
  slider,
}) => {
  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };
  const modalContentRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(modalContentRef, handleCloseModal);
  const [activeItem, setActiveItem] = useState("تصویر دسته بندی");
  const handleCahngeActiveItem = (item: string) => {
    setActiveItem(item);
  };
  //----------------form states----------------------//
  const [categoryName, setCategoryName] = useState(name);
  const handleEditCategoryName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategoryName(e.currentTarget.value);

  const handleSubmit = () => {};

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div
        id="myModal"
        className="modal show long-modal"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" ref={modalContentRef}>
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                {name}
              </h4>
              <CloseModalIcon handleCloseModal={handleCloseModal} />
            </div>
            <div className="modal-body">
              <EditChangeName
                categoryName={categoryName}
                onEditCategoryName={handleEditCategoryName}
              />
            </div>
            <NavTabs
              activeItem={activeItem}
              onChangeActiveItem={handleCahngeActiveItem}
            />
            <ImageEditSection
              picture={image}
              slider={slider}
              activeItem={activeItem}
              onChangeActiveItem={handleCahngeActiveItem}
            />
            <div className="modal-footer">
              <SubmitModalButton handleSubmitModal={handleSubmit} />
              <CloseModalButton handleCloseModal={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategoryModal;










// user{

// }

// category:create category:delete