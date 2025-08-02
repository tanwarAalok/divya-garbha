import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBsJB-NMKC4pnmZhF6yDl_ffE7wp_46DNg",
  authDomain: "divya-garbha.firebaseapp.com",
  projectId: "divya-garbha",
  storageBucket: "divya-garbha.firebasestorage.app",
  messagingSenderId: "98411392561",
  appId: "1:98411392561:web:d6a84283e694bb3655af10",
  measurementId: "G-77FQNYT82R"
};


// const analytics = getAnalytics(app);


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase for compat libraries if it hasn't been already
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const legacyAuth = firebase.auth(); // We might need this for some components
export const firebaseApp = app; 