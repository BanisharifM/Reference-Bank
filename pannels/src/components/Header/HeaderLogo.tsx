import React from "react";
import img1 from "../../assets/images/logo5.png";
import img2 from "../../assets/images/logo-light-icon.png";
import img3 from "../../assets/images/logo3.png";
import img4 from "../../assets/images/logo-light-text.png";

interface IProps {
  logoTitle: boolean;
}
const HeaderLogo: React.FC<IProps> = ({ logoTitle }) => {
  return (
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">
        <b>
          <img
            src={img1}
            alt="homepage"
            className="dark-logo"
            style={{ width: "40px", height: "28px" }}
          />
          <img src={img2} alt="homepage" className="light-logo" />
        </b>
        <span>
          {logoTitle && (
            <>
              <img
                src={img3}
                alt="homepage"
                className="dark-logo"
                style={{ width: "108px", height: "21px" }}
              />
              <img src={img4} className="light-logo" alt="homepage" />
            </>
          )}
        </span>{" "}
      </a>
    </div>
  );
};

export default HeaderLogo;
