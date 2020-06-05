import React from "react";
import { IMenuItem } from "../types";
const MenuItem: React.FC<IMenuItem> = ({ path, title }) => {
  return (
    <li>
      <a href="index4.html">{title}</a>
    </li>
  );
};

export default MenuItem;
