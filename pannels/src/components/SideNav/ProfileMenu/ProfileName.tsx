import React from "react";

interface IProps {
  name: string;
  handleToggleProfileMenu: () => void;
}
const ProfileName: React.FC<IProps> = ({ name, handleToggleProfileMenu }) => {
  return (
    <a
      onClick={handleToggleProfileMenu}
      href="javascript:void(0)"
      className="dropdown-toggle u-dropdown link hide-menu"
    >
      {name}
    </a>
  );
};

export default ProfileName;
