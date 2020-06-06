import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="page-wrapper" style={{ minHeight: "672px" }}>
        <div className="container-fluid">{children}</div>
      </div>
    </>
  );
};

export default BaseLayout;
