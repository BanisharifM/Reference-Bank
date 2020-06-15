import React from "react";
import { IMenuItem } from "../types";
import MenuItem from "./MenuItem";
import Can from "../../Can";

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
      {items.map((item, index) => (
        <Can
          perform={item.toHavePermissions}
          yes={() => <MenuItem {...item} key={index} />}
        />
      ))}
    </ul>
  );
};

export default Menu;
