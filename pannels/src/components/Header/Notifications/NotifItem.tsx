import React from "react";

const NotifItem = () => {
  return (
    <a>
      <div className="btn btn-danger btn-circle">
        <i className="fa fa-link"></i>
      </div>
      <div className="mail-contnet">
        <h5>Luanch Admin</h5>{" "}
        <span className="mail-desc">Just see the my new admin!</span>{" "}
        <span className="time">9:30 AM</span>{" "}
      </div>
    </a>
  );
};

export default NotifItem;
