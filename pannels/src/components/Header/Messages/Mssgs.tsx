import React from "react";
import MessageItem from "./MessageItem";

const Mssgs = () => {
  return (
    <li>
      <div className="message-center">
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </li>
  );
};

export default Mssgs;
