import React from "react";
import "./Footer.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import logo from "../res/logo_icon.png"; // Tell webpack this JS file uses this image
//#0452ff

function Footer() {
  return (
    <div className="footerFlex">
      <div className="footer">
        <p>Notify © 2020 Terry, Elvo, Carl &amp; Sarah </p>
        <a href="./" Style="color: white;text-decoration:none;cursor:pointer;">
          Terms of service
        </a>
      </div>
    </div>
  );
}

export default Footer;
