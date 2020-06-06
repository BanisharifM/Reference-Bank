import React from "react";
import { IMenuItem } from "../types";
import MenuItem from "./MenuItem";

interface IProps {
  items: IMenuItem[];
  active: boolean;
}
const Menu: React.FC<IProps> = ({ items, active }) => {
  return (
    <ul
      aria-expanded="false"
      className={`${active ? "collapse in" : "collapse"}`}
    >
      {items.map((item) => (
        <MenuItem {...item} />
      ))}
    </ul>
  );
};

export default Menu;
