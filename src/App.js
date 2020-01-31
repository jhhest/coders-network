import React from "react";
import { Switch, Route } from "react-router-dom";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

import "./App.css";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Contact" component={ContactPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
