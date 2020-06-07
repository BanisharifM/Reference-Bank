import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../pannels/src/redux/models/IStore";

const HeaderNav = () => {
  const user = useSelector((state: IStore) => state.user);
  // console.log(user, "in header nav");
  return (
    <div>
      <h1> This is navbar and use is : {user.client.first_name}</h1>
    </div>
  );
};

export default HeaderNav;
