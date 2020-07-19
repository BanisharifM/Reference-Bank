import React from "react";
import TopHeader from "../../components/Company/Header/TopHeader";
import BottomHeader from "../../components/Company/Header/BottomHeader";

export const Company = () => {
  return (
    <>
      <div
        className="header_sticky_bar d-none"
        style={{ height: "120px" }}
      ></div>
      <header className="header_wrap fixed-top header_with_topbar">
        <TopHeader />
        <BottomHeader />
      </header>
    </>
  );
};
export default Company;
