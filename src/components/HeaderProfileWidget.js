import React, { useState, useEffect } from "react";
import "./styles/HeaderProfileWidget.css";

const HeaderProfileWidget = ({ user }) => {
  const [photoURL_, setPhotoURL] = useState("");

  useEffect(() => {
    const { email, displayName, photoURL } = user;
    if (user) {
      setPhotoURL(photoURL);
    }
  }, [user]);

  return (
    <div>
      <img className="rounded_profile" src={photoURL_} />
    </div>
  );
};

export default HeaderProfileWidget;
