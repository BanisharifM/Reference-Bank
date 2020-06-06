import React from "react";

interface IProps {
  name: string;
  handleToggleProfileMenu: () => void;
}
const ProfileName: React.FC<IProps> = ({ name, handleToggleProfileMenu }) => {
  return (
    <div
      onClick={handleToggleProfileMenu}
      className="dropdown-toggle u-dropdown link hide-menu"
    >
      {name}
    </div>
  );
};

export default ProfileName;
