import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="footerFlex">
      <div className="footer">
        <p>Notify © 2020 Terry, Elvo, Carl &amp; Sarah </p>
        <a href="./" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>
          Terms of service
        </a>
      </div>
    </div>
  );
}

export default Footer;
