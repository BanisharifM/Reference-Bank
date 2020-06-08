import React, { useState, useRef } from "react";
import Category from "./Category";
import Navbar from "./Navbar";
import { useOutsideClicker } from "../../../services/Hooks/useOutSideClicker";

export const HeaderNav = () => {
  const [showCategories, setShowCategories] = useState(false);
  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };
  const handleCloseCategories = () => {
    setShowCategories(false);
  };
  const categoryRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(categoryRef, handleCloseCategories);
  return (
    <header className="header_wrap">
      <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
        <div className="container" style={{ margin: "0px 0px" }}>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-3">
              <div
                className="categories_wrap"
                ref={showCategories ? categoryRef : null}
              >
                <button
                  type="button"
                  className="categories_btn"
                  onClick={handleToggleCategories}
                >
                  <i className="linearicons-menu"></i>
                  <span>همه دسته بندی ها</span>
                </button>
                <Category isShow={showCategories} />
              </div>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

// import React from "react";
// import { useSelector } from "react-redux";
// import { IStore } from "../../pannels/src/redux/models/IStore";

// const HeaderNav = () => {
//   const user = useSelector((state: IStore) => state.user);
//   // console.log(user, "in header nav");
//   return (
//     <div>
//       <h1> This is navbar and use is : {user.client.first_name}</h1>
//     </div>
//   );
// };

// export default HeaderNav;
