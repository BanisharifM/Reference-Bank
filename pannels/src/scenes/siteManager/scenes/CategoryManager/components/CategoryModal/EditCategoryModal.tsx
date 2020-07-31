import React, { useRef, useState } from "react";
import { EModalActionTypes } from "../../../../../../services/contexts/ModalContext/models";
import { useOutsideClicker } from "../../../../../../services/hooks/useOutsideClicker";
import { AppActions } from "../../../../../../services/contexts/AppActions";
import CloseModalIcon from "../../../../../../components/CloseModalIcon";
import CloseModalButton from "../../../../../../components/CloseModalButton";
import EditChangeName from "./EditChangeName";
import NavTabs from "./NavTabs";
import ImageEditSection from "./ImageEditSection";
import SubmitModalButton from "../../../../../../components/SubmitModalButton";
import {
  ICategoryRes,
  ICategorySlider,
} from "../../../../../../services/utils/api/Admin/models";
import { TCompanyTableData } from "../../../../../Dashboard/Scenes/CompaniesList/components/models";
import { TCategoryTableData } from "../../models";
import useSWR from "swr";
import { fetcherWithParam } from "../../../../../../services/axios/fetchers";
import { baseAdminUrl } from "../../../../../../services/utils/api/Admin";
import Spinner from "../../../../../../components/Spinner";
import CategoryIdProvider from "../../../../../../services/contexts/CategoryIdContext/CategoryIdProvider";
import api from "../../../../../../services/utils/api";
import Button from "../../../../../../components/Button";
//-----------------------------------------------------------------

interface IProps {
  modalDispatcher: (actions: AppActions) => void;
}

const EditCategoryModal: React.FC<IProps & TCategoryTableData> = ({
  modalDispatcher,
  id,
  title,
}) => {

  const { mutate } = useSWR<ICategoryRes[]>(`${baseAdminUrl}/category/`);
  const { data } = useSWR<ICategorySlider[]>(
    [`${baseAdminUrl}/category_slider/`, "category", id],
    fetcherWithParam
  );

  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };

  const modalContentRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(modalContentRef, handleCloseModal);
  const [activeItem, setActiveItem] = useState("اسلایدر دسته بندی");
  const [loading, setLoading] = useState(false);
  const handleCahngeActiveItem = (item: string) => {
    setActiveItem(item);
  };
  //----------------form states----------------------//
  const [categoryName, setCategoryName] = useState(title);
  const handleEditCategoryName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategoryName(e.currentTarget.value);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.adminApi.editCategory({ id, title: categoryName });
	  mutate()
    } finally {
      setLoading(false);
    }
  };

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
                {title}
              </h4>
              <CloseModalIcon handleCloseModal={handleCloseModal} />
            </div>
            <div className="modal-body">
              <EditChangeName
                categoryName={categoryName}
                onEditCategoryName={handleEditCategoryName}
              />
            </div>
            {!data && <Spinner />}
            {data && (
              <>
                <NavTabs
                  activeItem={activeItem}
                  onChangeActiveItem={handleCahngeActiveItem}
                />
                <CategoryIdProvider categoryId={id}>
                  <ImageEditSection
                    // picture={image}

                    activeItem={activeItem}
                    onChangeActiveItem={handleCahngeActiveItem}
                  />
                </CategoryIdProvider>
              </>
            )}

            <div className="modal-footer">
              <Button
                onClick={handleSubmit}
                type="success"
                text="ویرایش"
                loading={loading}
              />
              <Button onClick={handleCloseModal} type="danger" text="بستن" />
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
