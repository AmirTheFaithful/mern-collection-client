import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "./context/theme-ctx";
import { ModalsContextProvider } from "./context/modals-ctx";
import App from "./App";

import "./locales/i18n"; // Localization bundle

import "./index.scss"; // Global stylesheets

const root: Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ModalsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalsContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
