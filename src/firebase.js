import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
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

export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log("docs.docs: ", docs.docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        /*uid: user.uid,*/
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        image: user.photoURL,
        savedTrails: [],
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithFacebook = async () => {
  const fbProvider = new FacebookAuthProvider();
  try {
    const res = await signInWithPopup(auth, fbProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log("docs.docs: ", docs.docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        savedTrails: [],
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

export const logOut = () => {
  signOut(auth);
};
