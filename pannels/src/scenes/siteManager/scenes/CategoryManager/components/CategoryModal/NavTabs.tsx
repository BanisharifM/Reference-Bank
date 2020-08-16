import React from "react";

interface IProps {
  activeItem: string;
  onChangeActiveItem: (item: string) => void;
}
const picCategory = "تصویر دسته بندی";
const sliderCategory = "اسلایدر دسته بندی";

const NavTabs: React.FC<IProps> = ({ activeItem, onChangeActiveItem }) => {
  const itemOneActive = activeItem === picCategory;
  const itemTwoActive = activeItem === sliderCategory;

  return (
    <ul className="nav nav-tabs customtab">
	  {/* <li className="nav-item" onClick={(e) => onChangeActiveItem(picCategory)}>
		<div
		  className={`nav-link ${itemOneActive ? "active" : ""}  `}
		  data-toggle="tab"
		  role="tab"
		  aria-selected="false"
		>
		  <span className="hidden-xs-down">تصویر دسته بندی</span>
		</div>
	  </li> */}
      <li
        className="nav-item"
        onClick={(e) => onChangeActiveItem(sliderCategory)}
      >
        <div
          className={`nav-link ${itemTwoActive ? "active" : ""}`}
          data-toggle="tab"
          role="tab"
          aria-selected="true"
        >
          <span className="hidden-xs-down">اسلایدر دسته بندی</span>
        </div>
      </li>
    </ul>
  );
};

export default NavTabs;
