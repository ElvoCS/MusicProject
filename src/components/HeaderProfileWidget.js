import React, { useState, useEffect } from "react";
import "./HeaderProfileWidget.css";

const HeaderProfileWidget = ({ user }) => {
  const [photoURL_, setPhotoURL] = useState("");

  const { email, displayName, photoURL } = user;

  return (
    <div>
      <img className="rounded_profile" src={photoURL} />
    </div>
  );
};

export default HeaderProfileWidget;
