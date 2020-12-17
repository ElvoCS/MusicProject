import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Song from "./pages/Song";
import Footer from "./Components/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from "./Components/Player";

function App() {
  return (
    <Router>
      <Header />
      <div className="mainBodyContainer">
        <div className="bodyFlex">
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/song" component={Song} />
            <Route path="/Login" exact component={Login} />
            <Route path="/CreateAccount" exact component={CreateAccount} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>

        <div className="footerFlex">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
