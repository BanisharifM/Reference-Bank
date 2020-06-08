import React, { useState, useEffect } from "react";
import SubHeaderNavItem from "./SubHeaderNavItem";
import { IMenuItem } from "../types";
import Menu from "./Menu";
import { useSidebarCollapse } from "../../../services/contexts/SideNavContext/SidenavCollapseContext";
import { useHistory } from "react-router-dom";
import { mapMenuItemToE } from "../../../services/constants/mapPItemsToE";

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
  const [isActiveMenuItem, setIsActiveMenuItem] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const location = history.location.pathname;
    const mapedMenuItem = mapMenuItemToE[title];
    if (location.includes(mapedMenuItem)) setIsActiveMenuItem(true);
  }, [history.location.pathname, title]);

  return (
    <li className={isActiveMenuItem ? "active" : ""}>
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
