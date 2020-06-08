/** start importin styles */
import "./assets/css/font.css";
import "./assets/css/style.css";
import "./assets/css/login-register.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./scenes/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { Router, Route, BrowserRouter } from "react-router-dom";
import { browserHistory } from "./services/navigation/navigation";
import PrivateRoute from "./components/PrivateRoute";
import PrivatePage from "./scenes/PrivatePage";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={browserHistory}>
        {/* <BrowserRouter basename='/dashboard'> */}
        <App />
        {/* </BrowserRouter> */}
      </Router>
    </PersistGate>
  </Provider>,
  document.querySelector("#main-wrapper")
);
