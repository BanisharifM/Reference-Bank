import React from "react";
import { IMenuItemIcon } from "../types";
import { NavLink } from "react-router-dom";

const ProfileMenuItem: React.FC<IMenuItemIcon> = ({ title, path, icon }) => {
  return (
    <NavLink
      activeClassName="active"
      to={path}
      className="dropdown-item text-right"
    >
      <i className={icon} />
      {title}
    </NavLink>
  );
};

export default ProfileMenuItem;
