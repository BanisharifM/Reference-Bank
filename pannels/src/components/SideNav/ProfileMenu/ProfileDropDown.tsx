import React, { useState, useRef, useCallback } from "react";
import ProfileName from "./ProfileName";
import ProfileMenuItem from "./ProfileMenuItem";
import ProfileDropDownDevider from "./ProfileDropDownDevider";
import { useOutsideClicker } from "../../../services/hooks/useOutsideClicker";
import ProfileMenuExitItem from "./ProfileMenuExitItem";

const ProfileDropDown = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const handleToggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const handleCloseProfileMenu = useCallback(() => {
    setShowProfileMenu(false);
  }, []);
  useOutsideClicker(profileRef, handleCloseProfileMenu);

  return (
    <div
      className={`dropdown ${showProfileMenu && "show"}`}
      ref={showProfileMenu ? profileRef : null}
    >
      <ProfileName
        name="مدیریت سایت"
        handleToggleProfileMenu={handleToggleProfileMenu}
      />
      <div
        className={`dropdown-menu animated flipInY  ${
          showProfileMenu && "show"
        }`}
      >
        <ProfileMenuItem
          title="پروفایل"
          icon="ti-user"
          path="/user-services/profile"
          toHavePermissions={[]}
        />
        <ProfileMenuItem
          title="اعلان‌ها"
          icon="ti-email"
          path="/agaga"
          toHavePermissions={[]}
        />
        <ProfileMenuItem
          title="صندوق پیام ها"
          icon="icon-note"
          path="/agagaaa"
          toHavePermissions={[]}
        />
        <ProfileDropDownDevider />
        <ProfileMenuItem
          title="تنظیمات حساب"
          icon="ti-setting"
          path="/gg"
          toHavePermissions={[]}
        />
        <ProfileDropDownDevider />

        <ProfileMenuExitItem
          title="خروج"
          icon="fa fa-power-off"
          toHavePermissions={[]}
        />
      </div>
    </div>
  );
};

export default ProfileDropDown;
