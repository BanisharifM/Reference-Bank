import { FieldAttributes } from "formik";
import * as _ from "lodash";
import React, { useCallback, useState } from "react";
import { OptionsType, StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";
import api from "../services/utils/api";

const styles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid red",
  }),
  dropdownIndicator: (provided) => ({ ...provided, color: "red" }),
  indicatorSeparator: (provided) => ({ ...provided, color: "red" }),
};

const CustomeSelectCategory: React.FC<FieldAttributes<any>> = ({
  calculateOptions,
  defaultValue,
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (newValue: string) =>
    setSearchValue(newValue);
  const isError = touched[field.name] && errors[field.name];
  const handleChange = (e: any) => {
    e && e.value && setFieldValue(field.name, e.value, false);
    !e && setFieldValue(field.name, 0, false);
  };
  const handleFocus = () => {
    setFieldTouched(field.name, false, true);
  };
  const handleBlur = () => {
    setFieldTouched(field.name, true, true);
  };
  const promiseOptions = (
    inputValue: string,
    callback: (
      options: OptionsType<{
        value: number | string;
        label: string;
      }>
    ) => void
  ) => {
    api.adminApi.getCategories({ search: inputValue }).then(({ data }) => {
      callback(calculateOptions(data)!);
    });
  };

  const debouncedLoadOptions = useCallback(
    _.debounce(promiseOptions, 1000),
    []
  );
  // console.log(defaultValue , 'defaulttttttttt');

  return (
    <>
      <label>{label}</label>
      <AsyncSelect
        defaultValue={defaultValue}
        cacheOptions
        isClearable
        defaultOptions
        loadOptions={(e, cb) => debouncedLoadOptions(e, cb)}
        inputValue={searchValue}
        onInputChange={handleSearchValueChange}
        placeholder="???????????? ????????"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        styles={isError && styles}
        noOptionsMessage={() => "?????????? ???????? ??????!"}
        loadingMessage={() => "???? ?????? ????????????????..."}
      />

      {isError && (
        <div role="alert" className="text-danger form-control-feedback">
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
export default CustomeSelectCategory;
