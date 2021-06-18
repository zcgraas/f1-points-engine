import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { RaceTable, Navigation, Info } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: "#343a40" }}>
      <Navigation />
      <Info />
      <RaceTable />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
