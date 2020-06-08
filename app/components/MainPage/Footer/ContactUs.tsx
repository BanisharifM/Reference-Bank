import React from "react";
import ContactInformation from "./ContactInformation";
import ContactSocialMedia from "./ContactSocialMedia";

const ContactUs = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <ContactInformation />
      <ContactSocialMedia />
    </div>
  );
};

export default ContactUs;
