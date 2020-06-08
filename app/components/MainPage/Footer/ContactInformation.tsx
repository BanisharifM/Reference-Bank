import React from "react";

const ContactInformation = () => {
  return (
    <div className="widget">
      <h6 className="widget_title">اطلاعات تماس</h6>
      <ul className="contact_info contact_info_light">
        <li>
          <i className="ti-location-pin"></i>
          <p>اصفهان- دروازه تهران- خیابان باهنر</p>
        </li>
        <li>
          <i className="ti-email"></i>
          <a href="mailto:info@gmail.com">info@gmail.com</a>
        </li>
        <li>
          <i className="ti-mobile"></i>
          <p>+989140761390</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
