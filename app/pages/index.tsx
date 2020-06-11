import React from "react";
import Head from "next/head";
import { HeaderNav } from "../components/MainPage/Header/HeaderNav";
import MainContent from "../components/MainPage/MainContent";
import Footer from "../components/MainPage/Footer/Footer";
import { axiosInterceptor } from "../services/axios/axiosInterceptor";
import { axiosInstance } from "../services/axios/axios";
import MainSlider from "../components/MainPage/MainSlider/MainSlider";

export const index = () => {
  return (
    <>
      <HeaderNav />
      <MainSlider />
      <MainContent />
      <Footer />
    </>
  );
};
export default index;

// import Head from "next/head";
// import { wrapper } from "../redux";
// import axios from "axios";
// import { axiosInstance } from "../services/axios/axios";
// import { useState, useEffect } from "react";
// import Cookie from "js-cookie";
// import { ParsCookies } from "../services/Cookie/cookie";
// import Router from "next/router";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/stores/user/userActions";
// import { IStore } from "../redux/models/IStore";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const user = useSelector((state: IStore) => state.user.client);
//   const handleSubmit = () => {
//     axios
//       .post("https://api.restino.ir/accounts/api/v1/authenticate/", {
//         username,
//         password,
//       })
//       .then((res) => {
//         Cookie.set("refresh", res.data.refresh);
//         Cookie.set("access", res.data.access);
//         dispatch(loginUser());
//       });
//   };
//   useEffect(() => {
//     if (user.isAuth) Router.push("/shop");
//   }, [user.isAuth]);
//   return (
//     <div className="container">
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.currentTarget.value)}
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.currentTarget.value)}
//       />
//       <button onClick={handleSubmit}>login</button>
//       {user.isLoading && <p>is Loading</p>}
//     </div>
//   );
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, preview, req }) => {
//     const cookie = ParsCookies(req);
//     console.log(req)
//     req.hea

//     console.log("2. Page.getStaticProps uses the store to dispatch things");
//     const data = await api.login.loginUser("09213198172", "@1378Alisajad");
//     const { data } = await axiosInstance.get("/profile/");
//   }
// );
