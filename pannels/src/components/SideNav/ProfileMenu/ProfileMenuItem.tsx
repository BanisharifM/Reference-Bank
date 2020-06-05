import React from "react";
import { IMenuItemIcon } from "../types";

const ProfileMenuItem: React.FC<IMenuItemIcon> = ({ title, path, icon }) => {
  return (
    <a href="javascript:void(0)" className="dropdown-item text-right">
      <i className={icon}></i> {title}
    </a>
  );
};

export default ProfileMenuItem;
