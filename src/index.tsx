import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/GlobalStyle";
import { store } from "./store/store";
import { ModalRoot } from "./components/Modals/ModalRoot/ModalRoot";
import { App } from "./components/App/App";

ReactDOM.render(
  <>
    <Provider store={store}>
      <ModalRoot />
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
