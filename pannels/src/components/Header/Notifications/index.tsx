import React from "react";
import NotifItem from "./NotifItem";
import NotifHeader from "./NotifHeader";
import Notifs from "./Notifs";
import NotifFooter from "./NotifFooter";

const index = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
      <ul>
        <NotifHeader />
        <Notifs />
        <NotifFooter />
      </ul>
    </div>
  );
};

export default index;
