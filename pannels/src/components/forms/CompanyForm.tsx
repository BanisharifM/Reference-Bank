// Render Prop
import {Field, Form, Formik} from "formik";
import React from "react";
import CompanyMap from "../../scenes/Dashboard/Scenes/CreateCompany/components/CompanyMap";
import CustomeCalanderComponent from "../../scenes/Dashboard/Scenes/CreateCompany/components/CustomeCalanderComponent";
import {adminCreatevalidationSchema} from "../../scenes/Dashboard/Scenes/CreateCompany/constants";
import {IAdminCreateCompanyFormikState} from "../../scenes/Dashboard/Scenes/CreateCompany/models";
import {companyEditValitionSchema} from "../../scenes/UserServices/scenes/Profile/constants";
import {ICompanyEditFormikState} from "../../scenes/UserServices/scenes/Profile/models";
import CustomInputComponent from "../CustomeInputComponent";

// declare function fromType<T extends boolean>(
//   x: T
// ): T extends true
//   ? IAdminCreateCompanyFormikState
//   : ICompanyikState;

interface IProps<T> {
  status: "admin-create" | "company-edit";
  initialValue: T;
}
const CompanyForm = <
  T extends IAdminCreateCompanyFormikState | ICompanyEditFormikState
>({
  status,
  initialValue,
}: IProps<T>) => {
  return (
    <div>
      <Formik<T, {}>
        initialValues={initialValue}
        validationSchema={
          status === "admin-create"
            ? adminCreatevalidationSchema
            : companyEditValitionSchema
        }
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form-horizontal mt-4">
            <Field
              label="نام شرکت"
              type="text"
              name="name"
              component={CustomInputComponent}
            />
            <Field
              label="شماره همراه"
              type="text"
              name="phone_number"
              component={CustomInputComponent}
            />
            <Field
              label="شماره تلفن شرکت"
              type="text"
              name="company_number"
              component={CustomInputComponent}
            />
            <Field
              label="کد پستی"
              type="text"
              name="zip_code"
              component={CustomInputComponent}
            />
            <div className="row">
              {status === "admin-create" && (
                <>
                  <div className="col-12 col-md-6 col-xl-4 ">
                    <Field
                      label="تاریخ شروع فعالیت:"
                      type="text"
                      name="start_date"
                      component={CustomeCalanderComponent}
                    />
                  </div>
                  <div className=" col-12 col-md-6 col-xl-4">
                    <Field
                      label="تاریخ پایان فعالیت:"
                      type="text"
                      name="end_date"
                      component={CustomeCalanderComponent}
                    />
                  </div>
                </>
              )}
              <div
                className={`col-12 ${
                  status === "admin-create" ? "col-xl-4" : ""
                }  mb-2`}
              >
                <Field
                  name="location"
                  component={CustomInputComponent}
                  label="آدرس:"
                  type="text"
                />
                <CompanyMap />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              <i className="fa fa-check" />{" "}
              {status === "admin-create" ? "ثبت شرکت" : "ارسال درخواست تفییر"}
            </button>

            {/*{JSON.stringify(values, null, 2)}*/}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CompanyForm;
