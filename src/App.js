import React from "react";
import "./App.css";
import Header from "./components/Header";
import Song from "./pages/Song";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="mainBodyContainer">
        <div className="bodyFlex">
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/song" component={Song} />
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/CreateAccount" exact component={CreateAccount} />
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
