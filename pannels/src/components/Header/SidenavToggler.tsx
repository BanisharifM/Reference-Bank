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
        <a
          className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
          href="javascript:void(0)"
        >
          <i className={`${showSidebar ? "ti-close" : "ti-menu"}`}></i>
        </a>{" "}
      </li>
      <li className="nav-item" onClick={handleResizeSidebar}>
        <a
          className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
          href="javascript:void(0)"
        >
          <i className="icon-menu"></i>
        </a>{" "}
      </li>
    </>
  );
};

export default SidenavToggler;
