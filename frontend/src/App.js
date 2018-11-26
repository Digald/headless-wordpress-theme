import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Component Imports
import Home from './Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route extact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
