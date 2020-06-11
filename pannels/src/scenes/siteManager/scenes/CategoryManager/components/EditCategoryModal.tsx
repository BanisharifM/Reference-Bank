import React, { useRef, useState } from "react";
import { EModalActionTypes } from "../../../../../services/contexts/ModalContext/models";
import { useOutsideClicker } from "../../../../../services/hooks/useOutsideClicker";
import { AppActions } from "../../../../../services/contexts/AppActions";
import CloseModalIcon from "../../../../../components/CloseModalIcon";
import CloseModalButton from "../../../../../components/CloseModalButton";
import EditChangeName from "./EditChangeName";
import NavTabs from "./NavTabs";
import ImageEditSection from "./ImageEditSection";

interface ICategory {
  id: number;
  name: string;
  picture: string;
  slider: string[];
}
interface IProps {
  modalDispatcher: (actions: AppActions) => void;
  category: ICategory;
}

const EditCategoryModal: React.FC<IProps> = ({
  modalDispatcher,
  category: { id, name, picture, slider },
}) => {
  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };
  const modalContentRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(modalContentRef, handleCloseModal);

  const [categoryName, setCategoryName] = useState(name);
  const handleEditCategoryName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategoryName(e.currentTarget.value);

  const [activeItem, setActiveItem] = useState("تصویر دسته بندی");
  const handleCahngeActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div id="myModal" className="modal show" style={{ display: "block" }}>
        <div className="modal-dialog">
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
              activeItem={activeItem}
              onChangeActiveItem={handleCahngeActiveItem}
            />
            <div className="modal-footer">
              <CloseModalButton handleCloseModal={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategoryModal;
