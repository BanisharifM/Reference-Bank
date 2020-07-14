import React from "react";

const NotifItem = () => {
  return (
    <a>
      <div className="btn btn-danger btn-circle">
        <i className="fa fa-link"/>
      </div>
      <div className="mail-contnet">
        <h5>درخواست ویرایش</h5>
        <span className="mail-desc">ویرایش اطلاعات هویتی شرکت</span>
        <span className="time">9:30 AM</span>{" "}
      </div>
    </a>
  );
};

export default NotifItem;
