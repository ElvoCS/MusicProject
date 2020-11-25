import React from "react";
import "./Header.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import fire from "./config/fire";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    document.getElementById("profile-button").style.color = "lightgreen";
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    document.getElementById("profile-button").style.color = "white";
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

  // const logOut = () => {
  //   fire.auth().signOut();
  // }

  return (
    <div className="header">
      <AppBar position="static" styles style={{ background: "#336bf2" }}>
        <div className="headerContainer">
          <div className="headerLogo">
            <Link to="/" Style=" overflow:hidden;">
              <IconButton style={{ padding: 20 }} Style=" overflow:visible">
                <img alt="Logo" className="header__logo_header" />
              </IconButton>
            </Link>
          </div>

          <div className="headerSearch">
            <div className="searchBar">
              <div Style="flex: 1;" className="searchIconContainer">
                <i class="fas fa-search  fa-lg" Style="color:#336bf2 "></i>
              </div>
              <div Style="flex: 20;" className="searchTextArea">
                <input className="inputField" placeholder="Start typing to search a song" Style="padding-left:5px"></input>
              </div>
            </div>
          </div>

          <div className="headerNavigation">
            <IconButton id="heart-button" className="far fa-heart fa-2x" Style="color: white;" size="medium" aria-controls="fade-menu-liked" aria-haspopup="true" onClick={handleClick1} />
            <IconButton id="profile-button" Style="color: white;" className="far fa-user fa-2x" size="medium" aria-controls="fade-menu-profile" aria-haspopup="true" onClick={handleClick} />
          </div>
        </div>

        <Menu id="fade-menu-liked" anchorEl={anchorEl1} keepMounted open={open1} onClose={handleClose1} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }} TransitionComponent={Fade}>
          <MenuItem onClick={handleClose1}>
            <Icon className="far fa-play-circle" size="small" Style="color: black; padding-right:10px;" />
            Lil Skies - Red Roses
          </MenuItem>
          <MenuItem onClick={handleClose1}>
            <Icon className="far fa-play-circle" size="small" Style="color: black; padding-right:10px;" />
            Drake - The Motion
          </MenuItem>
          <MenuItem onClick={handleClose1}>
            <Icon className="far fa-play-circle" size="small" Style="color: black; padding-right:10px;" />
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
            <MenuItem className="header-links" onClick={handleClose}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </AppBar>
    </div>
  );
}

export default Header;
