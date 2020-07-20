import React from "react";

interface IProps {
  itemName: string;
}
export const NavbarLi: React.FC<IProps> = ({ itemName }) => {
  return (
    <li>
      <a className="nav-link nav_item" href="index-2.html">
		  {itemName}
      </a>
    </li>
  );
};
export default NavbarLi;
