import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import { FieldAttributes } from "formik";

// const filterColors = (inputValue: string) => {
//   return colourOptions.filter(i =>
//     i.label.toLowerCase().includes(inputValue.toLowerCase())
//   );
// };

const CustomeAsyncSelect: React.FC<FieldAttributes<any>> = ({
  label,
  field,
  getOptions, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <label>{label}</label>
      <AsyncSelect
		{...field}
        cacheOptions
        defaultOptions
        loadOptions={getOptions}
      />
    </>
  );
};
export default CustomeAsyncSelect;
