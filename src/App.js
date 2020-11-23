import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Song from "./pages/Song";
import Footer from "./Components/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from "./Components/Player";

function App() {
  return (
    <Router>
      <div className="mainBodyContainer">
        <Header />

        <div className="bodyFlex">
          <Switch>
            <Route path="/Profile" component={Profile} />
            <Route path="/Song" component={Song} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
        <div className="player_container">
          <Player />
        </div>

        <div className="footerFlex">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
