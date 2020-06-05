import React, { useState, useRef } from "react";
import Messages from "./Messages";
import { useOutsideClicker } from "../../services/hooks/useOutsideClicker";

const MessageNavItem = () => {
  const [messageShow, setMessageShow] = useState(false);
  const messageRef = useRef<HTMLLIElement>(null);
  const handleToggleMessages = () => {
    setMessageShow(!messageShow);
  };
  const handleCloseMessages = () => {
    setMessageShow(false);
  };
  useOutsideClicker(messageRef, handleCloseMessages);
  return (
    <li
      ref={messageShow ? messageRef : null}
      className={`nav-item dropdown ${messageShow && "show"}`}
      onClick={handleToggleMessages}
    >
      <div className="nav-link dropdown-toggle waves-effect waves-dark" >
        <i className="icon-note"></i>
        <div className="notify">
          {" "}
          <span className="heartbit"></span> <span className="point"></span>{" "}
        </div>
      </div>
      <Messages isShow={messageShow} />
    </li>
  );
};

export default MessageNavItem;
