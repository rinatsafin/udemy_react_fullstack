import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./css/App.css";

// COMPONENTS
import CSStransition from "./components/CSStransition";
import Tgroup from "./components/tgroup";
import TransitionComp from "./components/Transition";
import User from "./components/user";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/csstransition">CSStransition</Link>
          <Link to="/tgroup">Transitions group</Link>
          <Link to="/user">PT User</Link>
        </div>
        <Route path="/transition" component={TransitionComp} />
        <Route path="/csstransition" component={CSStransition} />
        <Route path="/tgroup" component={Tgroup} />
        <Route path="/user" component={User} />
      </div>
    </BrowserRouter>
  );
};

export default App;
