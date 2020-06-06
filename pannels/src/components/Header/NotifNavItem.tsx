import React, { useState, useRef, useCallback } from "react";
import Notifications from "./Notifications";
import { useOutsideClicker } from "../../services/hooks/useOutsideClicker";

const NotifNavItem = () => {
  const [notifShow, setNotifShow] = useState(false);
  const notifRef = useRef<HTMLLIElement>(null);
  const handleToggleNotif = () => {
    setNotifShow(!notifShow);
  };
  const handleCloseNotif = useCallback(() => {
    setNotifShow(false);
  }, []);
  useOutsideClicker(notifRef, handleCloseNotif);

  return (
    <li
      ref={notifShow ? notifRef : null}
      className={`nav-item dropdown ${notifShow && "show"}`}
      onClick={handleToggleNotif}
    >
      <div className="nav-link dropdown-toggle waves-effect waves-dark">
        {" "}
        <i className="ti-email"></i>
        <div className="notify">
          {" "}
          <span className="heartbit"></span> <span className="point"></span>{" "}
        </div>
      </div>
      <Notifications isShow={notifShow} />
    </li>
  );
};

export default NotifNavItem;
