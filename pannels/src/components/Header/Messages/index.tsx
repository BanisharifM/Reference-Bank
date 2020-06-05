import React from "react";
import MessageHeader from "./MessageHeader";
import Mssgs from "./Mssgs";
import MessageFooter from "./MessageFooter";

const index = () => {
  return (
    <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown">
      <ul>
        <MessageHeader />
        <Mssgs />
        <MessageFooter />
      </ul>
    </div>
  );
};

export default index;
