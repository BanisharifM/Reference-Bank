import React from "react";
import SocialIcon from "./SocialIcon";

const ContactSocialMedia = () => {
  return (
    <div className="widget">
      <ul className="social_icons rounded_social">
        <SocialIcon
          iconClassName="ion-social-facebook"
          className="sc_facebook"
          pathTo="/"
        />
        <SocialIcon
          iconClassName="ion-social-twitter"
          className="sc_twitter"
          pathTo="/"
        />
        <SocialIcon
          iconClassName="ion-social-googleplus"
          className="sc_google"
          pathTo="/"
        />
        <SocialIcon
          iconClassName="ion-social-youtube-outline"
          className="sc_youtube"
          pathTo="/"
        />
        <SocialIcon
          iconClassName="ion-social-instagram-outline"
          className="sc_instagram"
          pathTo="/"
        />
      </ul>
    </div>
  );
};

export default ContactSocialMedia;
