import React from "react";
import { IMenuItemIcon } from "../types";

const ProfileMenuItem: React.FC<IMenuItemIcon> = ({ title, path, icon }) => {
  return (
    <div  className="dropdown-item text-right">
      <i className={icon}/>{title}
    </div>
  );
};

export default ProfileMenuItem;
