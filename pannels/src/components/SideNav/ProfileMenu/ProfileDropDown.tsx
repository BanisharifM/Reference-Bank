import React, { useState, useRef } from "react";
import ProfileName from "./ProfileName";
import ProfileMenuItem from "./ProfileMenuItem";
import ProfileDropDownDevider from "./ProfileDropDownDevider";
import { useOutsideClicker } from "../../../services/hooks/useOutsideClicker";

const ProfileDropDown = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const handleToggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const handleCloseProfileMenu = () => {
    setShowProfileMenu(false);
  };
  useOutsideClicker(profileRef, handleCloseProfileMenu);

  return (
    <div
      className={`dropdown ${showProfileMenu && "show"}`}
      ref={showProfileMenu ? profileRef : null}
    >
      <ProfileName
        name="حسین اشرفی"
        handleToggleProfileMenu={handleToggleProfileMenu}
      />
      <div
        className={`dropdown-menu animated flipInY  ${
          showProfileMenu && "show"
        }`}
      >
        <ProfileMenuItem title="پروفایل" icon="ti-user" path="/" />
        <ProfileMenuItem title="تراکنش ها" icon="ti-wallet" path="/" />
        <ProfileMenuItem title="صندوق پیام ها" icon="ti-email" path="/" />
        <ProfileDropDownDevider />
        <ProfileMenuItem title="تنظیمات حساب" icon="ti-setting" path="/" />
        <ProfileDropDownDevider />
        <ProfileMenuItem title="خروج" icon="fa fa-power-off" path="/" />
      </div>
    </div>
  );
};

export default ProfileDropDown;
