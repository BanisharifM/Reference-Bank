// Render Prop
import { Field, Form, Formik } from "formik";
import React from "react";
import CompanyMap from "../../scenes/Dashboard/Scenes/CreateCompany/components/CompanyMap";
import CustomeSelectCategory from "../../scenes/Dashboard/Scenes/CreateCompany/components/CustomeSelectCategory";
import { adminCreatevalidationSchema } from "../../scenes/Dashboard/Scenes/CreateCompany/constants";
import { IAdminCreateCompanyFormikState } from "../../scenes/Dashboard/Scenes/CreateCompany/models";
import { companyEditValitionSchema } from "../../scenes/UserServices/scenes/Profile/constants";
import { ICompanyEditFormikState } from "../../scenes/UserServices/scenes/Profile/models";
import CustomInputComponent from "../CustomeInputComponent";
import CustomeTextAreaComponent from "../CustomeTextAreaComponent";
import { ICompanyRes } from "../../services/utils/api/models";
import classnames from 'classnames'
import {stat} from "fs";

// declare function fromType<T extends boolean>(
//   x: T
// ): T extends true
//   ? IAdminCreateCompanyFormikState
//   : ICompanyikState;

interface IProps<T> {
  status: "admin-create" | "company-edit";
  initialValue: T;
}

const CompanyForm = <T extends IAdminCreateCompanyFormikState | ICompanyRes>({
  status,
  initialValue,
}: IProps<T>) => {
	const canCreate= status === 'admin-create'
	const canEdit= status === 'company-edit'
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
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form-horizontal mt-4">
            <div className="row">
              {canCreate && (
                <div className="col-md-4">
                  <Field
                    label="نام کاربری"
                    type="text"
                    name="username"
                    component={CustomInputComponent}
                  />
                  <Field
                    label="رمز عبور"
                    type="text"
                    name="password1"
                    component={CustomInputComponent}
                  />
                  <Field
                    label="تکرار رمز عبور"
                    type="text"
                    name="password2"
                    component={CustomInputComponent}
                  />
                </div>
              )}
              <div className={classnames({'col-md-4' : canCreate , 'col-md-6' : canEdit})}>
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
                <Field
                  label="شماره همراه"
                  type="text"
                  name="mobile_number"
                  component={CustomInputComponent}
                />
              </div>
              <div className={classnames({'col-md-4' : canCreate , 'col-md-6' : canEdit})}>
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

            {/* <div className="row">
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
            </div> */}

            <button type="submit" className="btn btn-success">
              <i className="fa fa-check" />{" "}
              {canCreate ? "ثبت شرکت" : "ارسال درخواست تفییر"}
            </button>

            {JSON.stringify(values, null, 2)}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CompanyForm;
