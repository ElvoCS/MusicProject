import React, { Component } from "react";
import "./App.css";
import Login from "./Login.js";
import HomeLogin from "./HomeLogin.js";
import fire from './config/fire';


class AppFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.user ? (<HomeLogin/>) : (<Login/>)}
      </div>
    )
  }
}


export default AppFunction;
