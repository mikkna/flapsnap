import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";

require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC5Er4oZT-e4woRNxf9ZG59c4-MnP9ussQ",
  authDomain: "dragly-359ad.firebaseapp.com",
  projectId: "dragly-359ad",
  storageBucket: "",
  messagingSenderId: "747702472609",
  appId: "1:747702472609:web:3f48f2bbe7117d8c87c5e0",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function init(user: firebase.User | null) {
  if (!user) {
    // Start a sign in process for an unauthenticated user.
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    await firebase.auth().signInWithPopup(provider);
  }
  if (user) {
    ReactDOM.render(
      <App db={db} userId={user.uid} />,
      document.getElementById("root")
    );
  }
}

firebase.auth().onAuthStateChanged((user) => {
  init(user);
});
