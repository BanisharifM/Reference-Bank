import React from "react";
interface IProps {
  itemName: string;
}
export const DropDownHeader: React.FC<IProps> = ({itemName}) => {
  return <li className="dropdown-header">{itemName}</li>;
};
export default DropDownHeader;
