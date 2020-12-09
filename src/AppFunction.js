import React, { Component } from "react";
import "./App.css";
import Login from ".//pages/Login";
import HomeLogin from ".//components/HomeLogin";
import fire from "./config/fire";

class AppFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{}</div>;
  }
}

export default AppFunction;
