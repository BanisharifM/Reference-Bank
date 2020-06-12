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
        {hasAction && <th onClick={onAdd}>{addable &&<i className="icon-plus3 text-success" /> }</th>}
      </tr>
    </thead>
  );
};
export default THead;
