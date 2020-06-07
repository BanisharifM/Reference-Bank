import React from "react";
import { IMenuItem } from "../types";
import { NavLink } from "react-router-dom";
const MenuItem: React.FC<IMenuItem> = ({ path, title }) => {
  return (
    <li>
      <NavLink to={path} activeClassName={"active"}>
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
