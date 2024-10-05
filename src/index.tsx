import React from "react";
import ReactDOM, { Root } from "react-dom/client";

import App from "./App";
import Navbar from "./components/Navbar";

const root: Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
