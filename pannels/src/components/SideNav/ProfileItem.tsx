import React from "react";
import ProfileLogo from "./ProfileMenu/ProfileLogo";
import ProfileDropDown from "./ProfileMenu/ProfileDropDown";

const ProfileItem = () => {
  return (
    <div className="user-profile">
      <div className="user-pro-body">
        <ProfileLogo />
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default ProfileItem;
