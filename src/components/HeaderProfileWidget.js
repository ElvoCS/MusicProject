import React, { useState, useEffect } from "react";
import "./HeaderProfileWidget.css";

const HeaderProfileWidget = ({ user }) => {
  const [photoURL_, setPhotoURL] = useState("");

  const { email, displayName, photoURL } = user;

  useEffect(() => {
    setPhotoURL(photoURL);
  });

  return (
    <div>
      <img className="rounded_profile" src={photoURL_} alt="profile" />
    </div>
  );
};

export default HeaderProfileWidget;
