// // Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-_TECs83ia9ZeooXwhJfekG3BuxDSSCM",
  authDomain: "react-images-upload-c998c.firebaseapp.com",
  projectId: "react-images-upload-c998c",
  storageBucket: "react-images-upload-c998c.appspot.com",
  messagingSenderId: "706237540243",
  appId: "1:706237540243:web:a08991ba76a38537ccea66",
  measurementId: "G-LMQSTM570Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
