import React, { useState } from "react";
import SubHeaderNavItem from "./SubHeaderNavItem";
import { IMenuItem } from "../types";
import Menu from "./Menu";
import { useSidebarCollapse } from "../../../services/contexts/SideNavContext/SidenavCollapseContext";

interface IProps {
  title: string;
  news?: number;
  icon: string;
  items: IMenuItem[];
}
const SubHeaderNav: React.FC<IProps> = ({ title, news, icon, items }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleToggleubMenu = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <li>
      <SubHeaderNavItem
        title={title}
        news={news}
        icon={icon}
        active={!isCollapse}
        handleToggleubMenu={handleToggleubMenu}
      />
      <Menu items={items} active={!isCollapse} />
    </li>
  );
};

export default SubHeaderNav;
