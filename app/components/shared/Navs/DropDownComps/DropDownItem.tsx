import React from "react";
import DropDownMenu from "./DropDownMenu";

interface IProps {
	reverse?:boolean
	itemName:string
}

export const DropDownItem:React.FC<IProps> = ({children , reverse=false ,itemName}) => {
  return (
    <li>
      <a className="dropdown-item menu-link dropdown-toggler" href="#">
		  {itemName}
      </a>
	  <DropDownMenu reverse={reverse}>
		  {children}
	  </DropDownMenu>
    </li>
  );
};
export default DropDownItem;
