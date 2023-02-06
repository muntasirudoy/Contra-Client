import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "/node_modules/primeflex/primeflex.css";

import { BrowserRouter } from "react-router-dom";
import { firebaseConfig } from "./dbconfig";
import { ContextProvider } from "./Context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
