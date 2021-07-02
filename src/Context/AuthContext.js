import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    setIsAuth(true);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    setIsAuth(true);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function loginWithGoogle() {
    setIsAuth(true);
    return auth.signInWithPopup(provider).catch(alert);
  }

  function logout() {
    setIsAuth(false);
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAuth,
    signup,
    login,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
