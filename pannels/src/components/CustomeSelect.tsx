import React, { Component } from "react";

import { FieldAttributes } from "formik";
import Select, {
  ValueType,
  OptionsType,
  OptionTypeBase,
  StylesConfig,
} from "react-select";

const styles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid red",
  }),
  dropdownIndicator: (provided) =>({...provided,color: 'red'}),
	  indicatorSeparator : ( provided )=>({...provided , color:'red'})
};
const CustomeSelect: React.FC<FieldAttributes<any>> = ({
  label,
  options,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue ,setFieldTouched}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];
  const handleChange = (e: any) => {
    setFieldValue(field.name, e.value, true);
  };
  const handleFocus = () =>{
	  setFieldTouched(field.name , false ,true)
  }
  const handleBlur = () => {
	  
	  setFieldTouched(field.name , true,true)
  }
  
  return (
    <>
      <label>{label}</label>
      <Select
        className="kkkkkkkh"
        styles={isError && styles}
        defaultValue={options && options[1]}
        options={options && options}
        placeholder="انتخاب کنید"
        onChange={handleChange}
	  onFocus={handleFocus}
	  onBlur={handleBlur}
      />

      {isError && (
        <div role="alert" className="text-danger form-control-feedback">
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
export default CustomeSelect;
