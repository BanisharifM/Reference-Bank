import React from "react";

interface IProps {
  title: string;
  news?: number;
  icon : string
}
const SubHeaderItem: React.FC<IProps> = ({ title, news , icon }) => {
  return (
    <a className="has-arrow waves-effect waves-dark">
      <i className={icon}></i>
      <span className="hide-menu">
        {title}
        <span className="badge badge-pill badge-cyan ml-auto">{news}</span>
      </span>
    </a>
  );
};

export default SubHeaderItem;
