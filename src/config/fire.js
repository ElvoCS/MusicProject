import { LocalDiningOutlined } from "@material-ui/icons";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBvJ7as0R2D4nfMlDNXUW-YpTbqkOaNunc",
  authDomain: "notify-4bbbd.firebaseapp.com",
  databaseURL: "https://notify-4bbbd.firebaseio.com",
  projectId: "notify-4bbbd",
  storageBucket: "notify-4bbbd.appspot.com",
  messagingSenderId: "61539454539",
  appId: "1:61539454539:web:130f60d04ef8a9796c47ce",
  measurementId: "G-50N2LRCPXG",
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const checkLogin = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      return user;
    } else {
      return false;
    }
  });
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firebase.firestore().doc(`Users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        email,
        displayName,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firebase.firestore().doc(`Users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export default fire;
