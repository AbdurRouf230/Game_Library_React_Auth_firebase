import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase.init";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
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
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};
export default AuthContextProvider;
