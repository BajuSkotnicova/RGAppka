import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { useContext, createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithGoogle,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
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
const googleProvider = new GoogleAuthProvider();
/*function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedTrails: [],
    });
  }*/
const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signInWithGoogle = async () => {
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
  /*.then((result) => {
        /*const name = result.user.displayName;
        const profilePic = result.user.photoURL;
        console.log(result, "result");

        localStorage.setItem("name", name);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });*/

  function signInWithFacebook() {
    const fbProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbProvider);
  }
  /*
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

  /*function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }*/

  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider
      value={{
        logOut,
        user,
        signInWithFacebook,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
