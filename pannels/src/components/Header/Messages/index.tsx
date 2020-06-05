import React from "react";
import MessageHeader from "./MessageHeader";
import Mssgs from "./Mssgs";
import MessageFooter from "./MessageFooter";
interface IProps {
  isShow: boolean;
}
const index: React.FC<IProps> = ({ isShow }) => {
  return (
    <div
      className={`dropdown-menu mailbox dropdown-menu-right animated bounceInDown ${
        isShow && "show"
      }`}
    >
      <ul>
        <MessageHeader />
        <Mssgs />
        <MessageFooter />
      </ul>
    </div>
  );
};

export default index;
