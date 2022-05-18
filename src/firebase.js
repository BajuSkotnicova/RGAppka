import { initializeApp } from "firebase/app";
import { useContext, createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedTrails: [],
    });
  }

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
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
  };

  const signInWithFacebook = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithFacebook(auth, fbProvider);
  };
  /*
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

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
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
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

export const UserAuth = () => {
  return useContext(AuthContext);
};
