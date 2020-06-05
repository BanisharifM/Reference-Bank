import React from "react";
import img5 from "../../../assets/images/users/1.jpg";

const MessageItem = () => {
  return (
    <a href="javascript:void(0)">
      <div className="user-img">
        {" "}
        <img src={img5} alt="user" className="img-circle" />{" "}
        <span className="profile-status online pull-right"></span>{" "}
      </div>
      <div className="mail-contnet">
        <h5>Pavan kumar</h5>{" "}
        <span className="mail-desc">Just see the my admin!</span>{" "}
        <span className="time">9:30 AM</span>{" "}
      </div>
    </a>
  );
};

export default MessageItem;
