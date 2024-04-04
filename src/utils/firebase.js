// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHhawZJMnnIoQ5AVcjBo646pu5qYk_1L0",
  authDomain: "gpt-netflex.firebaseapp.com",
  projectId: "gpt-netflex",
  storageBucket: "gpt-netflex.appspot.com",
  messagingSenderId: "862248559350",
  appId: "1:862248559350:web:4850e00801e815ca9dc2d7",
  measurementId: "G-H5H2EJD5ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();