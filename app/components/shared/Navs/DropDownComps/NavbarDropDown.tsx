import React from "react";
import DropDownMenu from "./DropDownMenu";
import DropDownMainTitle from "./DropDownMainTitle";

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
        <DropDownMainTitle itemName={itemName} />
        <DropDownMenu reverse={reverse}>{children}</DropDownMenu>
      </li>
    </>
  );
};
export default NavbarDropDown;
