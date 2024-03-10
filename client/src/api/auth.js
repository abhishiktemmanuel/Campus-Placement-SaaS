import { auth, googleProvider } from "../config/firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const signInWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const idToken = await user.getIdToken(true);
  return { user, idToken };
};

export const signUpWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const idToken = await user.getIdToken(true);
  return { user, idToken };
};

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const signUpWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
