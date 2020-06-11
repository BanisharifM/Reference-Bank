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
      className={`form-group ${props.className}`}
    >
      <input
        {...field}
        {...props}
        className={`${isError ? "border-danger" : ""} form-control`}
      />
      {}
      {isError && (
        <div role="alert" className="text-danger mt-1">
          {errors[field.name]}
        </div>
      )}
    </div>
  );
};

export default CustomInputComponent;
