// Render Prop
import { Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import CustomInputComponent from "../../../../../components/CustomeInputComponent";
import CustomeSelectCategory from "../../../../../components/CustomeSelectCategory";
import CustomeTextAreaComponent from "../../../../../components/CustomeTextAreaComponent";
import { ICompanyRes } from "../../../../../services/utils/api/models";
import { baseCompanyUrl } from "../../../../../services/utils/api/myCompany";
import { IEditCompany } from "../../../../../services/utils/api/myCompany/models";
import { calculateLeafs } from "../../../../../services/utils/calculateOptions";
import { objectComparison } from "../../../../../services/utils/objectComparison";
import CompanyMap from "../../../../Dashboard/Scenes/CreateCompany/components/CompanyMap";
import { companyEditValitionSchema } from "../constants";
interface IProps {
  initialValue: IEditCompany;
  onSubmit: (values: IEditCompany) => Promise<any>;
}

const EditCompanyForm = ({ initialValue, onSubmit }: IProps) => {
  const { data } = useSWR<ICompanyRes[]>(`${baseCompanyUrl}/my_company/`);
  return (
    <div>
      <Formik<IEditCompany, {}>
        initialValues={initialValue}
        enableReinitialize
        validationSchema={companyEditValitionSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const shouldSend = objectComparison<IEditCompany>(
            initialValue,
            values
          );
          try {
            await onSubmit(shouldSend);
            toast.success("درخواست تغییر اطلاعات با موفقیت ارسال شد");
          } catch (err) {
            toast.error("درخواست شما ارسال نگردید");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form-horizontal mt-4">
            <div className="row">
              <div className="col-md-6">
                <Field
                  label="نام شرکت"
                  type="text"
                  name="name"
                  component={CustomInputComponent}
                />
                <Field
                  label="نام مدیر عامل"
                  type="text"
                  name="manager_name"
                  component={CustomInputComponent}
                />
              </div>
              <div className="col-md-6 mb-4">
                <Field
                  label="شماره تلفن شرکت"
                  type="text"
                  name="phone_number"
                  component={CustomInputComponent}
                />
                <Field
                  label="آدرس سایت"
                  type="text"
                  name="website"
                  component={CustomInputComponent}
                />
                <Field
                  label="فیلد کاری"
                  defaultValue={
                    initialValue.category && {
                      value: initialValue.category,
                      lable: data && data[0].category_title,
                    }
                  }
                  calculateOptions={calculateLeafs}
                  type="text"
                  name="category"
                  component={CustomeSelectCategory}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Field
                  name="address"
                  component={CustomeTextAreaComponent}
                  rows={4}
                  label="آدرس"
                  type="text"
                />
                <Field name="location" component={CompanyMap} />
              </div>
              <div className="col-md-6">
                <Field
                  label="شرح فعالیت"
                  type="text"
                  name="description"
                  component={CustomeTextAreaComponent}
                  rows={20}
                  className="mt-md-0 mt-3"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              <i className="fa fa-check" /> ارسال درخواست تغییر
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCompanyForm;
