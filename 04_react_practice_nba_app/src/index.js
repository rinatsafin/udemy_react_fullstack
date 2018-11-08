import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// COMPONENTS
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
