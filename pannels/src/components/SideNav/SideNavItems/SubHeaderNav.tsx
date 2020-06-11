import React, { useState, useEffect } from "react";
import SubHeaderNavItem from "./SubHeaderNavItem";
import { IMenuItem } from "../types";
import Menu from "./Menu";
import { useSidebarCollapse } from "../../../services/contexts/SideNavContext/SidenavCollapseContext";
import { useHistory, withRouter, RouteComponentProps } from "react-router-dom";
import { mapMenuItemToE } from "../../../services/constants/mapPItemsToE";

interface IProps {
  title: string;
  news?: number;
  icon: string;
  items: IMenuItem[];
}
const SubHeaderNav: React.FC<IProps & RouteComponentProps> = ({
  title,
  news,
  icon,
  items,
  history,
}) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleToggleubMenu = () => {
    setIsCollapse(!isCollapse);
  };

  const location = history.location.pathname;
  const mapedMenuItem = mapMenuItemToE[title];
  return (
    <li className={location.includes(mapedMenuItem) ? "active" : ""}>
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

// <li className={isActiveMenuItem ? "active" : ""}></li>
export default withRouter(SubHeaderNav);
