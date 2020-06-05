import React from "react";
import { IMenuItem } from "../types";
import MenuItem from "./MenuItem";

interface IProps {
  items: IMenuItem[];
}
const Menu: React.FC<IProps> = ({ items }) => {
  return (
    <ul aria-expanded="false" className="collapse">
      {items.map((item) => (
        <MenuItem {...item} />
      ))}
    </ul>
  );
};

export default Menu;
