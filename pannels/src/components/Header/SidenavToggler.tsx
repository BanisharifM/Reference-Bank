import React from "react";

interface IProps {
  handleOpenSideBar: () => void;
  handleResizeSidebar: () => void;
  showSidebar: boolean;
}
const SidenavToggler: React.FC<IProps> = ({
  handleOpenSideBar,
  handleResizeSidebar,
  showSidebar,
}) => {
  return (
    <>
      <li className="nav-item" onClick={handleOpenSideBar}>
        {" "}
        <div
          className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
          
        >
          <i className={`${showSidebar ? "ti-close" : "ti-menu"}`}></i>
        </div>{" "}
      </li>
      <li className="nav-item" onClick={handleResizeSidebar}>
        <div
          className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
        >
          <i className="icon-menu"></i>
        </div>{" "}
      </li>
    </>
  );
};

export default SidenavToggler;
