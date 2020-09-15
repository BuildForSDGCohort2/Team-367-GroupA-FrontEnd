import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi9-OqET2joaHlWYZObFQzzWBEqv-eQm8",
  authDomain: "team-367-groupa-frontend-db.firebaseapp.com",
  databaseURL: "https://team-367-groupa-frontend-db.firebaseio.com",
  projectId: "team-367-groupa-frontend-db",
  storageBucket: "team-367-groupa-frontend-db.appspot.com",
  messagingSenderId: "894207190800",
  appId: "1:894207190800:web:9918252db6e578f6f92795",
  measurementId: "G-XXC67LQN4W",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
