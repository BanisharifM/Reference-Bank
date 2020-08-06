import axios from "axios";
import React, {Suspense} from "react";
import {Switch} from "react-router-dom";
import {SWRConfig} from "swr";
import BaseLayout from "../components/BaseLayout";
import Loading from "../components/Loading";
import {useUserState} from "../services/contexts/UserContext/UserContext";
import routes, {renderRoutes} from "./routes";

const App = () => {
  // useEffect(() => {
  //   axios
  //     .get("/data_bank/admin/companies/")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const user = useUserState();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get('/api'+url).then((r) => r.data),
          }}
        >
          <BaseLayout>
            <Switch>{renderRoutes(routes)}</Switch>
          </BaseLayout>
        </SWRConfig>
      </Suspense>
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
