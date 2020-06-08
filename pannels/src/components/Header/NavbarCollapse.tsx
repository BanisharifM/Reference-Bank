import React from "react";
import NavbarSearch from "./NavbarSearch";
import SidenavToggler from "./SidenavToggler";
import NotifNavItem from "./NotifNavItem";
import MessageNavItem from "./MessageNavItem";

interface IProps {
  handleOpenSideBar: () => void;
  handleResizeSidebar: () => void;
  showSidebar: boolean;
}
const NavbarCollapse: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <div className="navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <SidenavToggler {...rest} />
        <NavbarSearch />
      </ul>
      <ul className="navbar-nav my-lg-0">
        <NotifNavItem />
        <MessageNavItem />
      </ul>
    </div>
  );
};

export default NavbarCollapse;
