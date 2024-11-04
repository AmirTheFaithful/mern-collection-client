import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeContextProvider } from "./context/theme-ctx";
import { ModalsContextProvider } from "./context/modals-ctx";
import App from "./App";
import { store } from "./store";

import "./locales/i18n"; // Localization bundle

import "./index.scss"; // Global stylesheets

const root: Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <ModalsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalsContextProvider>
    </Provider>
  </ThemeContextProvider>
);
