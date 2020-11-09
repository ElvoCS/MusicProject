import React from "react";
import "./App.css";
import Header from "./components/Header";
import Song from "./pages/Song";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" ">
        <Header />
        <Switch>
          <Route path="/Profile" component={Profile} />
          <Route path="/Song" component={Song} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
