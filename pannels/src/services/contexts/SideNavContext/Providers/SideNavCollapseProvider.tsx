import React, { useState } from "react";
import { SidenavCollapseContext } from "../SidenavCollapseContext";

interface IProps {
  collapse: boolean;
}
const SideNavCollapseProvider: React.FC<IProps> = ({ children, collapse }) => {
  const [collpase, setCollapse] = useState(collapse);
  const handleCollapse = (collapse: boolean) => {
    setCollapse(collapse);
  };
  return (
    <SidenavCollapseContext.Provider value={[collapse, handleCollapse]}>
      {children}
    </SidenavCollapseContext.Provider>
  );
};

export default SideNavCollapseProvider;
