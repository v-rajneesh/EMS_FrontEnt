import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./general.css";
import { Button } from "react-bootstrap";
import Router from "./components/router/Router";
//
//
//
//
//
//
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
