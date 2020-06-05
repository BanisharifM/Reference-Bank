import React from "react";
import Notifications from "./Notifications";

const NotifNavItem = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle waves-effect waves-dark" href="">
        {" "}
        <i className="ti-email"></i>
        <div className="notify">
          {" "}
          <span className="heartbit"></span> <span className="point"></span>{" "}
        </div>
      </a>
      <Notifications />
    </li>
  );
};

export default NotifNavItem;
