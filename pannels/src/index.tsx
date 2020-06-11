/** start importin styles */
import "./assets/css/font.css";
import "./assets/css/style.css";
import "./assets/css/login-register.css";
import "./assets/css/user-card.css";
import "./assets/css/dropify.min.css"
import 'react-image-crop/dist/ReactCrop.css';


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
import SampleModal from "./components/SampleModal";
import ModalRoot from "./components/ModalRoot";
import ModalProvider from "./services/contexts/ModalContext/ModalProvider";
ReactDOM.render(
  <ModalProvider>
    <Router history={browserHistory}>
      {/* <BrowserRouter basename='/dashboard'> */}
      <ModalRoot />
      <App />
      {/* </BrowserRouter> */}
    </Router>
  </ModalProvider>,
  document.querySelector("#main-wrapper")
);

// <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
{
  /* </PersistGate>
  </Provider>, */
}
