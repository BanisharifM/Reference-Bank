import React from "react";

const HeaderItem: React.FC<{ title: string }> = ({ title }) => {
  return <li className="nav-small-cap">{title}</li>;
};

export default HeaderItem;
