import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../Auth_Firebase/firebase.init";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  // console.log(children.document.title);
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("State chnaged current user is : ", user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  const userInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    forgotPassword,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};
export default AuthContextProvider;
