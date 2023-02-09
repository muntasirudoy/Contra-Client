import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "/node_modules/primeflex/primeflex.css";
import 'boxicons'

import { BrowserRouter } from "react-router-dom";
import { firebaseConfig } from "./dbconfig";
import { ContextProvider } from "./Context/context";
import { ClientContextProvider } from "./Context/clientContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <ClientContextProvider>
      <ContextProvider>
          <App />
      </ContextProvider>
        </ClientContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
