import React from "react";
import "./App.css";
import Header from "./components/Header";
import Song from "./pages/Song";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Player from "./components/Player";
import Messenger from "./components/Messenger";
import UserProvider from "./providers/UserProvider";

function App() {
  const user = null;

  return (
    <UserProvider>
      <Router>
        {" "}
        <Header />
        <div className="mainBodyContainer">
          <div className="bodyFlex">
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/song/:id" component={Song} />
              <Route path="/login" exact component={Login} />
              <Route path="/createAccount" exact component={CreateAccount} />
              <Route path="/Messenger" exact component={Messenger} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>

          <div className="footerFlex">
            <Footer />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
