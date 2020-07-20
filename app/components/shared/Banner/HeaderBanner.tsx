import React, {Children} from "react";
export const HeaderBanner :React.FC = ({children}) => {
  return (
    <div className="header_banner">
		{children}
    </div>
  );
};
export default HeaderBanner;
