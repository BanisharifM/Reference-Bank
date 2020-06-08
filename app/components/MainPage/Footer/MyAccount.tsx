import React from "react";

const MyAccount = () => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-6">
      <div className="widget">
        <h6 className="widget_title">حساب من</h6>
        <ul className="widget_links">
          <li>
            <a href="#">حساب من</a>
          </li>
          <li>
            <a href="#">خارج شده</a>
          </li>
          <li>
            <a href="#">برگشت</a>
          </li>
          <li>
            <a href="#">تاریخچه سفارشات</a>
          </li>
          <li>
            <a href="#">سفارشات ثبت شده</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAccount;
