import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDuqngWgMDtzPJXkILsKm9ix7XQhE5uogU",
  authDomain: "studify-32a2a.firebaseapp.com",
  databaseURL: "https://studify-32a2a.firebaseio.com",
  projectId: "studify-32a2a",
  storageBucket: "studify-32a2a.appspot.com",
  messagingSenderId: "910542684017",
  appId: "1:910542684017:web:ed4a30257b9f71c21c40d0",
  measurementId: "G-BKWY6HZ23B",
};

firebase.initializeApp(config);
export default firebase;
