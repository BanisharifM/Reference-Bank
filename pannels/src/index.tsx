/** start importin styles */
import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom";
import "react-image-crop/dist/ReactCrop.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Router } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/dropify.min.css";
import "./assets/css/font.css";
import "./assets/css/login-register.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/style.css";
import "./assets/css/user-card.css";
import "./assets/css/pages/dataTables.bootstrap4.css";
import "./assets/css/pages/responsive.dataTables.min.css";

import ModalRoot from "./components/ModalRoot";
import App from "./scenes/App";
import ModalProvider from "./services/contexts/ModalContext/ModalProvider";
import { browserHistory } from "./services/navigation/navigation";
import {ToastContainer} from 'react-toastify'

ReactDOM.render(
  <ModalProvider>
    <Router history={browserHistory}>
      <ModalRoot />
	  <ToastContainer position='bottom-right' rtl/>
      <App />
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
