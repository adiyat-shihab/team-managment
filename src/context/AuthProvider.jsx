import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase.config.js";

export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUp = (email, password, name, image) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (r) =>
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        }),
    );
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserDetails(currentUser);
      } else {
        setUserDetails(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const value = { signUp, login, userDetails };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
