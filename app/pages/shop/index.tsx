import React from "react";

export const index = () => {
  return (
    <>
      <div>this is shop page</div>
    </>
  );
};
export default index

// import React from "react";
// import { useSelector } from "react-redux";
// import { IStore } from "../../../pannels/src/redux/models/IStore";
// import HeaderNav from "../../components/HeaderNav";
// import { wrapper } from "../../redux";
// import { ParsCookies } from "../../services/Cookie/cookie";
// import { loginUser } from "../../redux/stores/user/userActions";
// import { EUserActionTypes } from "../../redux/stores/user/userActionTypes";
// import api from "../../services/api";

// const index = () => {
//   return (
//     <>
//       <HeaderNav />
//       <div> this is shop page</div>
//     </>
//   );
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, preview, req }) => {
//     const cookie = ParsCookies(req);

//     const access = cookie && cookie.access;
//     const { data } = await api.login.getProfile(access);
//     console.log(data, "data");
//     store.dispatch({ type: EUserActionTypes.LOAD, payload: data });

//     // store.dispatch<any>({ type: EUserActionTypes.LOGIN });
//     // console.log("2. Page.getStaticProps uses the store to dispatch things");
//     // const data = await api.login.loginUser("09213198172", "@1378Alisajad");
//     // const { data } = await axiosInstance.get("/profile/");
//   }
// );

// export default index;
