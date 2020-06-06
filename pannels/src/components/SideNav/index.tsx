import React, { useState, useEffect, createContext } from "react";
import ProfileItem from "./ProfileItem";
import Nav from "./Nav";
import SideNavCollapseProvider from "../../services/contexts/SideNavContext/Providers/SideNavCollapseProvider";

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
      <div className="scroll-sidebar">
        <ProfileItem />
        <SideNavCollapseProvider collapse={true}>
          <Nav />
        </SideNavCollapseProvider>
      </div>
    </aside>
  );
};

export default SideNav;
