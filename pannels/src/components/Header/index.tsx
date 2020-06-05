import React, { useState, useEffect } from "react";
import img1 from "../assets/images/logo5.png";
import img2 from "../assets/images/logo-light-icon.png";
import img3 from "../assets/images/logo3.png";
import img4 from "../assets/images/logo-light-text.png";
import img6 from "../assets/images/big/img1.jpg";
import Notifications from "./Notifications";
import Messages from "./Messages";
import HeaderLogo from "./HeaderLogo";
import NavbarCollapse from "./NavbarCollapse";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [logoTitle, setLogoTitle] = useState(
    window.innerWidth > 1170 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // document.body.classList.remove("show-sidebar"); its not important
        setLogoTitle(false);
      }
      if (window.innerWidth > 1170) setLogoTitle(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenSideBar = () => {
    document.body.classList.toggle("show-sidebar");
    setShowSidebar(!showSidebar);
  };

  const handleResizeSidebar = () => {
    document.body.classList.toggle("mini-sidebar");
    setLogoTitle(!logoTitle);
  };

  return (
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <HeaderLogo logoTitle={logoTitle} />
        <NavbarCollapse
          handleOpenSideBar={handleOpenSideBar}
          handleResizeSidebar={handleResizeSidebar}
          showSidebar={showSidebar}
        />
      </nav>
    </header>
  );
};

export default Header;
