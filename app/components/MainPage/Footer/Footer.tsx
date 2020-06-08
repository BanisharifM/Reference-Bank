import React from "react";
import ButtonFooter from "./ButtonFooter";
import ContactUs from "./ContactUs";
import Links from "./Links";
import JoinUs from "./JoinUs";
import MyAccount from "./MyAccount";

const Footer = () => {
  return (
    <footer className="footer_dark">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <ContactUs />
            <Links />
            <MyAccount />
            <JoinUs />
          </div>
        </div>
      </div>
      <ButtonFooter />
    </footer>
  );
};

export default Footer;
