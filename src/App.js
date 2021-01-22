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

import { createStore } from "redux";
import songDataReducers from "./redux/reducers";
import { Provider } from "react-redux";

function App() {
  const user = null;
  const store = createStore(songDataReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <UserProvider>
      <Provider store={store}>
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
                <Route path="/Player" exact component={Player}/>
                <Route path="/" exact component={Home} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    </UserProvider>
  );
}

export default App;
