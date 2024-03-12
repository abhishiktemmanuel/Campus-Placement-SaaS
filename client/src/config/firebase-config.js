// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FB_API_KEY),
  authDomain: String(import.meta.env.VITE_FB_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_FB_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_FB_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_FB_MESSAGE_SENDER_ID),
  appId: String(import.meta.env.VITE_FB_APP_ID),
  measurementId: String(import.meta.env.VITE_FB_MEASUREMENT_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
