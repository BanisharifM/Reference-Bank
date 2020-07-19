import React from "react";
import DropDownMenu from "./DropDownMenu";

interface IProps {
  itemName: string;
  reverse?: boolean;
}

const NavbarDropDown: React.FC<IProps> = ({
  reverse = false,
  itemName,
  children,
}) => {
  return (
    <>
      <li className="dropdown">
        <a className="dropdown-toggle nav-link" href="#">
          بلاگ
        </a>

        <DropDownMenu reverse={reverse}>{children}</DropDownMenu>
      </li>
      {/*
  <NavbarDropDown item='blog' reverse>
	  <DropDownItem item='grids'>
		  <DropDownLink></DropDownLink>

	  </DropDownItem>

  </NavbarDropDown>


  */}
    </>
  );
};
export default NavbarDropDown;
