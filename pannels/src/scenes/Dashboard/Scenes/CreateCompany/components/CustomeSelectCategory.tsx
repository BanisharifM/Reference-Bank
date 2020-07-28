import React, { Component, useState, useMemo } from "react";

import { FieldAttributes } from "formik";
import Select, { StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";
import { baseAdminUrl } from "../../../../../services/utils/api/Admin";
import { fetcherWithSearch } from "../../../../../services/axios/fetchers";
import useDebounce from "../../../../../services/hooks/useDebounce";
import useSWR from "swr";
import {
  Tree,
  notHaveChildren,
} from "../../../../../services/utils/treeTravers";
import * as _ from "lodash";
import {
  ICompanyRes,
  ICategoryRes,
} from "../../../../../services/utils/api/Admin/models";
import axios from "axios";

const styles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid red",
  }),
  dropdownIndicator: (provided) => ({ ...provided, color: "red" }),
  indicatorSeparator: (provided) => ({ ...provided, color: "red" }),
};

  const calculateOptions = (data: ICategoryRes[]) => {
    if (data) {
      const notHaveChildrenArray = data.map((d) =>
        Tree.reduce(notHaveChildren, [], d)
      );
      const flattenVersion = _.flatten(notHaveChildrenArray);
      const options = flattenVersion.map((item) => ({
        value: item.id,
        label: item.title,
        parent_title: item.parent_title,
      }));
      return options;
    }
  };
const CustomeSelectCategory: React.FC<FieldAttributes<any>> = ({
  label,
  options,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
  const [searchValue, setSearchValue] = useState("");


  const handleSearchValueChange = (newValue: string) =>
    setSearchValue(newValue);
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
     axios
	 .get(`${baseAdminUrl}/category/search?=${inputValue}`)
      .then((res) => {
         calculateOptions(res.data);
      });
  const debouncedLoadOptions = _.debounce(promiseOptions, 1000);

  return (
    <>
      <label>{label}</label>
      <AsyncSelect
        cacheOptions
        defaultOptions={options}
        loadOptions={(e) => debouncedLoadOptions(e)}
        inputValue={searchValue}
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
export default CustomeSelectCategory;
