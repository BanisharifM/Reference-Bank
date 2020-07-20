import React from "react";
import Link from "next/link";

export const UserStatus = () => {
  return (
    <li>
      <Link href="/login">
        <a className="nav-link">
          <i className="linearicons-user"></i>
        </a>
      </Link>
    </li>
  );
};
export default UserStatus;
