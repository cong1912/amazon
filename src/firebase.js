// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6I3BqgLdWgINa_ZtSsF4tp5ilYDDepyQ",
  authDomain: "clone-16b2f.firebaseapp.com",
  projectId: "clone-16b2f",
  storageBucket: "clone-16b2f.appspot.com",
  messagingSenderId: "845497530718",
  appId: "1:845497530718:web:268636cffbdba343c077cf",
  measurementId: "G-LGH6TTGY0F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
