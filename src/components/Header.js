import React, { useState, useContext } from "react";
import "./styles/Header.css";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import firebase from "../config/fire";
import { UserContext } from "../providers/UserProvider";
import HeaderProfileWidget from "./HeaderProfileWidget";
import { useHistory } from "react-router";
import ChatIcon from "@material-ui/icons/Chat";

function Header() {
  const user = useContext(UserContext);
  let history = useHistory();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickLoggedOut = (event) => {
    document.getElementById("profile-button").style.color = "lightgreen";
    setAnchorEl(event.currentTarget);
  };

  const handleClickLoggedIn = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (document.body.contains(document.getElementById("profile-button"))) {
      document.getElementById("profile-button").style.color = "white";
    }
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);

  const handleClick1 = (event) => {
    document.getElementById("heart-button").style.color = "red";
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    document.getElementById("heart-button").style.color = "white";
    setAnchorEl1(null);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      history.push("/song/" + value);
      //window.location.reload(false);
    } else {
      history.push("/login");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const gotoMessenger = () => {
    if (user) {
      history.push("/Messenger");
    } else {
      history.push("/login");
    }
  };

  return (
    <AppBar position="static">
      <div className="headerContainer">
        <div className="headerLogo">
          <Link to="/" style={{ overflow: "hidden", padding: 0 }}>
            <IconButton style={{ padding: 0, overflow: "visible" }}>
              <img alt="Logo" className="header__logo_header" />
            </IconButton>
          </Link>
        </div>

        <div className="headerSearch">
          <div className="searchBar">
            <div style={{ flex: 1 }} className="searchIconContainer">
              <i className="fas fa-search  fa-lg"></i>
            </div>
            <div style={{ flex: 20 }} className="searchTextArea">
              <form style={{ width: "100%" }}>
                <input value={value} onChange={handleChange} onKeyPress={handleKeypress} className="inputField" id="searchText" placeholder="Start typing to search a song" style={{ paddingLeft: 5 }} />
                <Button onClick={handleSubmit} type="submit" style={{ display: "none" }}>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="headerNavigation">
          <IconButton className="chat-button" style={{ color: "white", fontSize: "large" }} onClick={() => gotoMessenger()}>
            <ChatIcon />
          </IconButton>

          <IconButton id="heart-button" className="far fa-heart fa-8x" style={{ color: "white", fontSize: 30 }} aria-controls="fade-menu-liked" aria-haspopup="true" onClick={handleClick1} />

          {user ? (
            <IconButton aria-controls="fade-menu-liked" aria-haspopup="true" onClick={handleClickLoggedIn}>
              <HeaderProfileWidget user={user} />{" "}
            </IconButton>
          ) : (
            <IconButton id="profile-button" style={{ color: "white", fontSize: 30 }} className="far fa-user fa-5x" size="medium" onClick={() => history.push("/login")} />
          )}
        </div>
      </div>

      <Menu id="fade-menu-liked" anchorEl={anchorEl1} keepMounted open={open1} onClose={handleClose1} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }} TransitionComponent={Fade}>
        <MenuItem onClick={handleClose1}>
          <Icon className="far fa-play-circle" size="small" style={{ color: "black", paddingRight: 10 }} />
          Lil Skies - Red Roses
        </MenuItem>
        <MenuItem onClick={handleClose1}>
          <Icon className="far fa-play-circle" size="small" style={{ color: "black", paddingRight: 10 }} />
          Drake - The Motion
        </MenuItem>
        <MenuItem onClick={handleClose1}>
          <Icon className="far fa-play-circle" size="small" style={{ color: "black", paddingRight: 10 }} />
          Bob Marley - Is This Love
        </MenuItem>
      </Menu>

      <Menu id="fade-menu-profile" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }} TransitionComponent={Fade}>
        <Link to="/Profile" className="header-links">
          <MenuItem className="header-links" onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>

        <Link to="/" className="header-links">
          <MenuItem
            className="header-links"
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
}

export default Header;
