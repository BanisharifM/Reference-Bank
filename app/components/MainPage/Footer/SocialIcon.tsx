import React from "react";

interface IProps {
  iconClassName: string;
  className: string;
  pathTo: string;
}
const SocialIcon: React.FC<IProps> = ({ iconClassName, className, pathTo }) => {
  return (
    <li>
      <a href={pathTo} className={className}>
        <i className={iconClassName}></i>
      </a>
    </li>
  );
};

export default SocialIcon;
