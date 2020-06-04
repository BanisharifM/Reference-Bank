import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "./redux/interfaces/IStore";
import { loginUser } from "./redux/actions/userActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Axios from "axios";

const App = () => {
  const user = useSelector<IStore>((store) => store.user);
  const dispatch = useDispatch();
  const handleLogin = () => {
    Axios.post("https://api.restino.ir/accounts/api/v1/authenticate/", {
      username: "09213198172",
      password: "@1378Alisajad",
    }).then((res) => {
      dispatch(loginUser(res.data.access));
    });
  };
  console.log(user);
  return (
    <div>
      <button onClick={handleLogin}>Loggin</button>
    </div>
  );
};

export default App;
