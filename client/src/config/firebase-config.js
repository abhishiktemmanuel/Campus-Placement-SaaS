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
  // apiKey: FB_API_KEY,
  // authDomain:FB_AUTH_DOMAIN,
  // projectId:FB_PROJECT_ID,
  // storageBucket: FB_STORAGE_BUCKET,
  // messagingSenderId: FB_MESSAGE_SENDER_ID ,
  // appId: FB_APP_ID,
  // measurementId: FB_MEASUREMENT_ID,
  apiKey: "AIzaSyBObA21V9tAyDqczohQZWrotiV1CsrJixI",
  authDomain: "campus-placement-saas.firebaseapp.com",
  projectId: "campus-placement-saas",
  storageBucket: "campus-placement-saas.appspot.com",
  messagingSenderId: "333525146743",
  appId: "1:333525146743:web:544b15e2177fe542373a72",
  measurementId: "G-ZMPL1VV9BZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
