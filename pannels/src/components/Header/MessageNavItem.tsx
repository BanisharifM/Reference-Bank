import React from "react";
import Messages from './Messages'

const MessageNavItem = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle waves-effect waves-dark"
        href=""
      >
        <i className="icon-note"></i>
        <div className="notify">
          {" "}
          <span className="heartbit"></span> <span className="point"></span>{" "}
        </div>
      </a>
      <Messages />
    </li>
  );
};

export default MessageNavItem;
