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
  doc,
  setDoc,
  where,
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
const signInWithProvider = async (provider, authProvider) => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider,
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
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithProvider(googleProvider, "google");
};
export const signInWithFacebook = async () => {
  const fbProvider = new FacebookAuthProvider();
  await signInWithProvider(fbProvider, "facebook");
};
export const logOut = () => {
  signOut(auth);
};
export const addUidConverter = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      ...data,
      uid: snapshot.id,
    };
  },
};
export const getCollection = (colID) => collection(db, colID);
export const getDocument = (colID, docID) => doc(db, colID, docID);
