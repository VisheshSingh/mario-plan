import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPyy-G-T4JSJ-uMmo7Igl5w06XU6MhXCY",
  authDomain: "mario-plan-d591d.firebaseapp.com",
  databaseURL: "https://mario-plan-d591d.firebaseio.com",
  projectId: "mario-plan-d591d",
  storageBucket: "mario-plan-d591d.appspot.com",
  messagingSenderId: "702208093921"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
