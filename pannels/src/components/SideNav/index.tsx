import React, { useState, useEffect } from "react";
import ProfileItem from "./ProfileItem";
import Nav from "./Nav";

const SideNav = () => {
  if (window.innerWidth > 1170) document.body.classList.remove("mini-sidebar");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.classList.add("mini-sidebar");
      }
      if (window.innerWidth > 1170)
        document.body.classList.remove("mini-sidebar");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <aside className="left-sidebar">
      {/* <!-- Sidebar scroll--> */}
      <div className="scroll-sidebar">
        {/* <!-- User Profile--> */}
        <ProfileItem />
        {/* <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav">
          <Nav />
        </nav>
        {/* <!-- End Sidebar navigation --> */}
      </div>
      {/* <!-- End Sidebar scroll--> */}
    </aside>
  );
};

export default SideNav;
