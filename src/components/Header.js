import React from "react";
import "./Header.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import logo from "../res/logo_icon.png"; // Tell webpack this JS file uses this image
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <AppBar position="static" styles style={{ background: "#336bf2" }}>
        <div className="headerContainer">
          <div className="headerLogo">
            <Link to="/">
              <IconButton style={{ padding: 8 }}>
                <img src={logo} alt="Logo" className="header__logo" />
              </IconButton>
            </Link>
          </div>

          <div className="headerSearch">
            <div className="searchBar">
              <div Style="flex: 1;" className="searchIconContainer">
                <i class="fas fa-search  fa-lg" Style="color:#336bf2 "></i>
              </div>
              <div Style="flex: 20;" className="searchTextArea">
                <input className="inputField" placeholder="Start typing to search a song" Style="padding-left:0px"></input>
              </div>
            </div>
          </div>

          <div className="headerNavigation">
            <IconButton className="far fa-heart fa-2x" size="medium"></IconButton>
            <Link to="/Profile">
              <IconButton className="far fa-user-circle fa-2x" size="medium"></IconButton>
            </Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
