import { Field } from "formik";
import React, { useState } from "react";
export const EditableCell = ({
  value: initialValue,
  editing,
  ...rest
}: any) => {
  const [value, setValue] = useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  // console.log(rest)

  if (editing === rest.row.original) {
    return (
      <Field name={rest.column.id} />
      // <input
      //   name ={rest.column.id}
      //   value={value}
      //   type="text"
      //   onChange={(e) => setValue(e.target.value)}
      // />
    );
  }
  return <span>{initialValue}</span>;
};
export default EditableCell;
