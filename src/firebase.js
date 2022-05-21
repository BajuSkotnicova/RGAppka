import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY5e1dqOnwbZqyjVPdnw6Osnl_lKSX8Bg",
  authDomain: "rg-app-c442f.firebaseapp.com",
  projectId: "rg-app-c442f",
  storageBucket: "rg-app-c442f.appspot.com",
  messagingSenderId: "678707764310",
  appId: "1:678707764310:web:f56f324ba76ab0072deff7",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const storage = getStorage(app);
export const storageRef = (path) => ref(storage, path);
export const auth = getAuth(app);

export const [user, loading, error] = useAuthState(auth);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log("docs.docs: ", docs.docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        image: user.photoURL,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const fbProvider = new FacebookAuthProvider();
export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, fbProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log("docs.docs: ", docs.docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
        image: user.photoURL,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("User", currentUser);
  });
  return () => {
    unsubscribe();
  };
});
