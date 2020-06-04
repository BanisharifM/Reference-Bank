import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Router } from "react-router-dom";
import { browserHistory } from "./services/navigation/navigation";
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
