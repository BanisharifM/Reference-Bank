import React from "react";
import { FieldAttributes } from "formik";

const CustomInputComponent: React.FC<FieldAttributes<any>> = ({
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];
  return (
    <div
      className={`form-group  ${props.className? props.className: ""} ${isError ? "has-danger" : ""}`}
    >
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={`${isError ? "form-control-danger" : ""} form-control`}
      />
      {}
      {isError && (
        <div role="alert" className="form-control-feedback">
          {errors[field.name]}
        </div>
      )}
    </div>
  );
};

export default CustomInputComponent;
