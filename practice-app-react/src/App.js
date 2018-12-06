import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Success from "./components/Success";
import PersonInfo from "./containers/PersonInfo";
class App extends Component {
  constructor(props){
    super(props);
    // window.localStorage.removeItem("username");
    // window.localStorage.removeItem("password");
    // window.localStorage.removeItem("email");
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={PersonInfo} />
          <Route path="/success" component={Success} />
        </div>
      </Router>
    );
  }
}

export default App;
