import React from "react";

interface IProps {
  title: string;
  news?: number;
  icon: string;
  active: boolean;
  handleToggleubMenu: () => void;
}
const SubHeaderNavItem: React.FC<IProps> = ({
  title,
  news,
  icon,
  active,
  handleToggleubMenu,
}) => {
  return (
    <a
      className={`has-arrow waves-effect waves-dark ${active && "active"}`}
      onClick={handleToggleubMenu}
    >
      <i className={icon}></i>
      <span className="hide-menu">
        {title}
        <span className="badge badge-pill badge-cyan ml-auto">{news}</span>
      </span>
    </a>
  );
};

export default SubHeaderNavItem;
