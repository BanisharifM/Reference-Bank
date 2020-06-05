import React, { useRef } from "react";
import NotifItem from "./NotifItem";
import NotifHeader from "./NotifHeader";
import Notifs from "./Notifs";
import NotifFooter from "./NotifFooter";
import { useOutsideClicker } from "../../../services/hooks/useOutsideClicker";

interface IProps {
  isShow: boolean;
}
const Index: React.FC<IProps> = ({ isShow }) => {
  return (
    <div
      className={`dropdown-menu dropdown-menu-right mailbox animated bounceInDown ${
        isShow && "show"
      }`}
    >
      <ul>
        <NotifHeader />
        <Notifs />
        <NotifFooter />
      </ul>
    </div>
  );
};

export default Index;
