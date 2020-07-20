import React from "react";
import Link from "next/link";

interface IProps {
  itemName: string;
  path: string;
}
export const NavbarLi: React.FC<IProps> = ({ itemName, path }) => {
  return (
    <li>
      <Link href="/">
        <a className="nav-link nav_item">{itemName}</a>
      </Link>
    </li>
  );
};
export default NavbarLi;
