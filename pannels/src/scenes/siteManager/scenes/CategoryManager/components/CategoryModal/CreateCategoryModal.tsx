import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import Button from "../../../../../../components/Button";
import CloseModalIcon from "../../../../../../components/CloseModalIcon";
import CustomInputComponent from "../../../../../../components/CustomeInputComponent";
import CustomeSelectCategory from "../../../../../../components/CustomeSelectCategory";
import { AppActions } from "../../../../../../services/contexts/AppActions";
import { EModalActionTypes } from "../../../../../../services/contexts/ModalContext/models";
import {
  ICreateCategory,
  ICategoryRes,
} from "../../../../../../services/utils/api/Admin/models";
import { calculateFlatten } from "../../../../../../services/utils/calculateOptions";
import api from "../../../../../../services/utils/api";
import useSWR from "swr";
import { baseAdminUrl } from "../../../../../../services/utils/api/Admin";
import * as Yup from "yup";
//-----------------------------------------------------------------

interface IProps {
  modalDispatcher: (actions: AppActions) => void;
}

const EditCategoryModal: React.FC<IProps> = ({ modalDispatcher }) => {
  const handleCloseModal = () => {
    modalDispatcher({ type: EModalActionTypes.HIDE_MODAL });
  };

  const { mutate } = useSWR<ICategoryRes[]>(`${baseAdminUrl}/category/`);
  //----------------form states----------------------//

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div
        id="myModal"
        className="modal show long-modal"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                اییجاد دسته بندی
              </h4>
              <CloseModalIcon handleCloseModal={handleCloseModal} />
            </div>

            <Formik<ICreateCategory>
              initialValues={{ title: "", parent: null }}
              validationSchema={Yup.object({
                title: Yup.string().required("عنوان دسته بندی الزامی است"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                await api.adminApi.createCategory(values);
                mutate();
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="modal-body" style={{ height: "500px" }}>
                    <Field
                      label="عنوان دسته بندی جدید"
                      type="text"
                      name="title"
                      component={CustomInputComponent}
                    />
                    <Field
                      label="اضافه کردن به "
                      calculateOptions={calculateFlatten}
                      type="text"
                      name="parent"
                      component={CustomeSelectCategory}
                    />
                  </div>
                  <div className="modal-footer">
                    <Button
                      loading={isSubmitting}
                      btnType="submit"
                      type="success"
                      text="ایجاد"
                    />
                    <Button
                      onClick={handleCloseModal}
                      type="danger"
                      text="بستن"
                    />
                  </div>
                </Form>
              )}
            </Formik>
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
