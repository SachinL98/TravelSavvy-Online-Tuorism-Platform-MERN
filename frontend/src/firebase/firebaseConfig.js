// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC94S6eOsX0HbxDlSXgVJ3dc6t31jwBZBw",
  authDomain: "travelsavvy-59227.firebaseapp.com",
  projectId: "travelsavvy-59227",
  storageBucket: "travelsavvy-59227.appspot.com",
  messagingSenderId: "972196073768",
  appId: "1:972196073768:web:d25b72dde54e1c844c801d",
 // measurementId: "G-32GGTK72V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;