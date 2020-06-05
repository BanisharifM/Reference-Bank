import React from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import BaseLayout from "./components/BaseLayout";
import { Switch } from "react-router-dom";
import routes, { renderRoutes } from "./scenes/routes";

const App = () => {
  return (
    <>
      <BaseLayout>
        <Switch>{renderRoutes(routes)}</Switch>
      </BaseLayout>
    </>
  );
};

export default App;

// import React, { useState, useMemo, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { IStore } from "./redux/models/IStore";
// import { loginUser } from "./redux/stores/user/userActions";
// import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
// import Axios from "axios";
// import useSWR from "swr";
// import { LSService } from "./services/LocalStorage/localStorage";
// import api from "./services/api";

// const App = () => {
//   const user = useSelector((store: IStore) => store.user);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const [tokens, setTokens] = useState({});
//   const handleLogin = async () => {
//     const tokens = await api.authenticateUser(
//       "/authenticate/",
//       username,
//       password
//     );
//     tokens && setTokens(tokens);
//     tokens && LSService.setToken(tokens);
//     dispatch(loginUser());
//   };
//   return (
//     <div>
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
//       <button onClick={handleLogin}>Loggin</button>
//       {user.isAuth && <p>{user.username}</p>}
//       {user.isLoading && <p>user is Loading</p>}
//     </div>
//   );
// };

// export default App;
