import React from "react";
import img5 from "../../../assets/images/users/1.jpg";

const MessageItem = () => {
  return (
    <a>
      <div className="user-img">
        {" "}
        <img src={img5} alt="user" className="img-circle" />{" "}
        <span className="profile-status online pull-right"></span>{" "}
      </div>
      <div className="mail-contnet">
        <h5>مهدی حسینی</h5>{" "}
        <span className="mail-desc">اطلاعات واریزی حساب</span>{" "}
        <span className="time">9:30 AM</span>{" "}
      </div>
    </a>
  );
};

export default MessageItem;
