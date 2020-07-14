import React, { useState } from "react";
import {column} from "./model";

interface IProps {
    columns:column[],
    hasAction:boolean,
    addable:boolean,
    onAdd:any
}
const THead:React.FC<IProps> = ({ columns, hasAction, addable,onAdd }) => {
  return (
    <thead>
      <tr>
        <th>ردیف</th>
        {columns.map(column => (
          <th key={column.path}>{column.label}</th>
        ))}
        {hasAction && <th className="text-center" onClick={onAdd}>{addable &&<i className="mdi mdi-plus text-success" /> }</th>}
      </tr>
    </thead>
  );
};
export default THead;
