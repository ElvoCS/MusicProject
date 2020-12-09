import firebase from "firebase";

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
export default fire;
