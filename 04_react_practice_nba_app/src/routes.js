import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "./components/Home";
import Layout from "./hoc/Layout";

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}
