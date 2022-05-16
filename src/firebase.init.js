// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeEUKiwAlGRuVEYA0cNVg-5ALZu6r3uJk",
  authDomain: "genius-car-services-88506.firebaseapp.com",
  projectId: "genius-car-services-88506",
  storageBucket: "genius-car-services-88506.appspot.com",
  messagingSenderId: "1098852632417",
  appId: "1:1098852632417:web:ed14f547f6288d66c5e720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


