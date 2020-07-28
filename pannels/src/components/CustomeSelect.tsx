import React, { Component } from "react";

import { FieldAttributes } from "formik";
import Select, { StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";

const styles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid red",
  }),
  dropdownIndicator: (provided) => ({ ...provided, color: "red" }),
  indicatorSeparator: (provided) => ({ ...provided, color: "red" }),
};
const CustomeSelect: React.FC<FieldAttributes<any>> = ({
  label,
  options,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  inputValue,
  isValidating ,
  handleSearchValueChange,
}) => {
  const isError = touched[field.name] && errors[field.name];
  const handleChange = (e: any) => {
    setFieldValue(field.name, e.value, true);
  };
  const handleFocus = () => {
    setFieldTouched(field.name, false, true);
  };
  const handleBlur = () => {
    setFieldTouched(field.name, true, true);
  };
  const handleInputChange = (e: string) => {
    handleSearchValueChange(e);
  };
  const promiseOptions = (inputValue: string) =>
    new Promise((resolve) => {
      resolve(options);
    });
  // console.log(options);

  return (
    <>
      <label>{label}</label>
	   <AsyncSelect
		cacheOptions
		defaultOptions={options}
		loadOptions={promiseOptions}
		inputValue={inputValue}
		onInputChange={handleSearchValueChange}
		// onChange={handleChange}
		// onFocus={handleFocus}
		// onBlur={handleBlur}
		// placeholder="انتخاب کنید"
		// styles={isError && styles}
	  /> 
      {/* <Select
		*   className="kkkkkkkh"
		*   options={options}
		*   placeholder="انتخاب کنید"
		*   onChange={handleChange}
		*   onFocus={handleFocus}
		*   onBlur={handleBlur}
		*   onInputChange={handleInputChange}
		*   inputValue={inputValue}
		* /> */}

      {isError && (
        <div role="alert" className="text-danger form-control-feedback">
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
export default CustomeSelect;
