import React, { useState, useContext } from "react";
import "./Header.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import firebasefrom "./config/fire";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { LocalDiningOutlined } from "@material-ui/icons";
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
    search(value);
    e.preventDefault();
    alert("you have searched for : " + value);
    // or you can send data to backend
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  function search(text) {
    console.log(text);
    //search apis for a song
    //retrieve song page with that data as an input
  }
  return (
    <AppBar position="static">
      <div className="headerContainer">
        <div className="headerLogo">
          <Link to="/" Style=" overflow:hidden; padding: 0px;">
            <IconButton Style=" padding:0px; overflow:visible;">
              <img alt="Logo" className="header__logo_header" />
            </IconButton>
          </Link>
        </div>

        <div className="headerSearch">
          <div className="searchBar">
            <div Style="flex: 1;" className="searchIconContainer">
              <i className="fas fa-search  fa-lg" Style="color:#336bf2;"></i>
            </div>
            <div Style="flex: 20;" className="searchTextArea">
              <form Style="width:100%">
                <input
                  value={value}
                  onChange={handleChange}
                  onKeyPress={handleKeypress}
                  className="inputField"
                  id="searchText"
                  placeholder="Start typing to search a song"
                  Style="padding-left:5px"
                />
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  Style="display:none;"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="headerNavigation">
          <IconButton
            className="chat-button"
            Style="color: white; font-size:30px"
            onClick={() => history.push("/Messenger")}
          >
            <ChatIcon />
          </IconButton>

          <IconButton
            id="heart-button"
            className="far fa-heart fa-8x"
            Style="color: white; font-size:30px"
            aria-controls="fade-menu-liked"
            aria-haspopup="true"
            onClick={handleClick1}
          />

          {user ? (
            <IconButton
              aria-controls="fade-menu-liked"
              aria-haspopup="true"
              onClick={handleClickLoggedIn}
            >
              <HeaderProfileWidget user={user} />{" "}
            </IconButton>
          ) : (
            <IconButton
              id="profile-button"
              Style="color: white; font-size:30px"
              className="far fa-user fa-5x"
              size="medium"
              onClick={() => history.push("/login")}
            />
          )}
        </div>
      </div>

      <Menu
        id="fade-menu-liked"
        anchorEl={anchorEl1}
        keepMounted
        open={open1}
        onClose={handleClose1}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose1}>
          <Icon
            className="far fa-play-circle"
            size="small"
            Style="color: black; padding-right:10px;"
          />
          Lil Skies - Red Roses
        </MenuItem>
        <MenuItem onClick={handleClose1}>
          <Icon
            className="far fa-play-circle"
            size="small"
            Style="color: black; padding-right:10px;"
          />
          Drake - The Motion
        </MenuItem>
        <MenuItem onClick={handleClose1}>
          <Icon
            className="far fa-play-circle"
            size="small"
            Style="color: black; padding-right:10px;"
          />
          Bob Marley - Is This Love
        </MenuItem>
      </Menu>

      <Menu
        id="fade-menu-profile"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Fade}
      >
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
