import React, { Component, createContext, useEffect, useState } from "react";
import { auth, generateUserDocument } from "../config/fire";

export const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
export default UserProvider;
