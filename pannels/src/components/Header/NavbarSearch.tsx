import React from "react";

const NavbarSearch = () => {
  return (
    <li className="nav-item">
      <form className="app-search d-none d-md-block d-lg-block">
        <input type="text" className="form-control" placeholder="جستجو ..." />
      </form>
    </li>
  );
};

export default NavbarSearch;
