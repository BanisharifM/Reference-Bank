import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      {children}
    </>
  );
};

export default BaseLayout;
