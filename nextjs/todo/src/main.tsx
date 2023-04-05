import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MetaMaskProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MetaMaskProvider>
  </React.StrictMode>
);
