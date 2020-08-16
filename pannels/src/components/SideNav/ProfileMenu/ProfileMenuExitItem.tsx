import React from "react";
import { IMenuItemIcon } from "../types";
import api from "../../../services/utils/api";
import {mainSiteUrl} from "../../../services/constants/address";
const ProfileMenuExitItem: React.FC<IMenuItemIcon> = ({ title, icon }) => {
  const handleLogout = async () => {
    try {
      await api.apiAuth.logout();
	  window.location.href=mainSiteUrl
    } catch (err) {}
  };

  return (
    <div
      onClick={handleLogout}
      style={{ cursor: "pointer" }}
      className="dropdown-item text-right"
    >
      <i className={`ml-2 ${icon}`} />
      {title}
    </div>
  );
};

export default ProfileMenuExitItem;
