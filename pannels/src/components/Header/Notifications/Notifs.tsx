import React from "react";
import NotifItem from "./NotifItem";

const Notifs = () => {
  return (
    <li>
      <div className="message-center">
        <NotifItem />
        <NotifItem />
        <NotifItem />
        <NotifItem />
      </div>
    </li>
  );
};

export default Notifs;
