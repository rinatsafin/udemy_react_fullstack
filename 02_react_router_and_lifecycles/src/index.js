import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import Lifecycles from "./components/lifecycles";
import Conditional from "./components/conditional";
import PageNotFound from "./components/page_not_found";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/posts" activeStyle={{ color: "red" }}>
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: "/profile",
              hash: "#fransis",
              search: "?profile=true"
            }}
            activeStyle={{ color: "red" }}
          >
            Profile
          </NavLink>
          <br />
          <NavLink to={{ pathname: "/lifecycles" }}>Lifecycles</NavLink>
          <br />
          <NavLink to={{ pathname: "/conditional" }}>Conditional</NavLink>
          <hr />
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/lifecycles" component={Lifecycles} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
