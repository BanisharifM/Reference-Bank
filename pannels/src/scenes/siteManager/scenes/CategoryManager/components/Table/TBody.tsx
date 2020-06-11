import React, { useState } from "react";
import {category, column, features, pageAction} from "./model";

interface IProps {
  data:category[],
  columns:column[],
  startPage:number,
  pageAction:pageAction,
  setPageAction:any,
  features:features,
  onEdit:any,
  onSave:any,
  onDelete:any,
  onCancel:any,
  inputErrors:any
}
const TBody:React.FC<IProps> = ({
  data,
  columns,
  startPage,
  pageAction,
  setPageAction,
  features,
  onEdit,
  onSave,
  onDelete,
  onCancel,
  inputErrors,
}) => {
  const handleChange = (e:React.FormEvent<HTMLInputElement>, item:category, column:column) => {
    const editedItem = { ...item, [column.path]: e.currentTarget.value };
    setPageAction({ status: pageAction.status, element: editedItem });
  };
  console.log(inputErrors);
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={item.id}>
          <th key={index + 1} scope="row">
            {startPage + index + 1}
          </th>
          {columns.map((column) => (
            <td key={`r${item.id}d${column.path}`}>
              {pageAction.status && pageAction.element.id === item.id ? (
                <input
                  className={
                    inputErrors[column.path]
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  value={pageAction.element[column.path]}
                  onChange={(e) => handleChange(e, item, column)}
                  type={column.type}
                />
              ) : (
                item[column.path]
              )}
            </td>
          ))}
          {features.hasAction && (
            <td key={`r${item.id}dACTION`}>
              {(features.editable || features.addable) &&
                pageAction.status &&
                pageAction.element.id === item.id && (
                  <i
                    className="icon-checkmark3 text-primary"
                    onClick={() => onSave(item)}
                  />
                )}
              {features.editable &&
                !(pageAction.status && pageAction.element.id === item.id) && (
                  <i
                    className="icon-pencil5 text-primary"
                    aria-hidden="true"
                    onClick={() => onEdit(item)}
                  />
                )}
              {(features.editable || features.addable) &&
                pageAction.status &&
                pageAction.element.id === item.id && (
                  <i
                    className="icon-cross2 text-danger"
                    onClick={() => onCancel(item)}
                  />
                )}
              {features.deletable &&
                !(pageAction.status && pageAction.element.id === item.id) && (
                  <i
                    className="icon-bin text-danger"
                    aria-hidden="true"
                    onClick={() => onDelete(item)}
                  />
                )}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};
export default TBody;
