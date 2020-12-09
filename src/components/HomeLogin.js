import React from "react";
import fire from "../config/fire";

function HomeLogin() {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <h1>You are logged in</h1>
      <button onClick={this.logout}>Logout</button>
    </div>
  );
}

export default HomeLogin;
