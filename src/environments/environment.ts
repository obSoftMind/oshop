
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXrtYt-onmozA5tnRdS9k9BWC_2GAze8",
  authDomain: "oshop-f9f77.firebaseapp.com",
  projectId: "oshop-f9f77",
  storageBucket: "oshop-f9f77.appspot.com",
  messagingSenderId: "528912876535",
  appId: "1:528912876535:web:c2c45294d60fec826be4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDLXrtYt-onmozA5tnRdS9k9BWC_2GAze8",
    authDomain: "oshop-f9f77.firebaseapp.com",
    projectId: "oshop-f9f77",
    storageBucket: "oshop-f9f77.appspot.com",
    messagingSenderId: "528912876535",
    appId: "1:528912876535:web:c2c45294d60fec826be4f2"
  }
};