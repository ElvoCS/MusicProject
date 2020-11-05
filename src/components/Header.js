import React from "react";
import "./Header.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import logo from "../res/logo.png"; // Tell webpack this JS file uses this image

function Header() {
  return (
    <div className="header">
      <AppBar position="static" style={{ background: "#0452ff" }}>
        <div className="headerContainer">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
