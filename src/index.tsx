import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { ModalRoot } from "./components/Modals/ModalRoot/ModalRoot";
import { App } from "./components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <ModalRoot />
    <App />
  </Provider>,
  document.getElementById("root")
);
