import React, { useState } from "react";
import "./HeaderProfileWidget.css";

const HeaderProfileWidget = ({ user }) => {
  const [photoURL_, setPhotoURL] = useState("");

  const { email, displayName, photoURL } = user;

  const getUserData = () => {
    setPhotoURL(photoURL);
  };

  return (
    <div onLoad={() => getUserData()}>
      <img src={photoURL_} alt="profile" />
    </div>
  );
};

export default HeaderProfileWidget;
