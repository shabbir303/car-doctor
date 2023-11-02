import { createContext, useEffect, useState } from "react";
import auth from "../Hooks/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = ()=>{
      setLoading(true);
      return signOut(auth);
    }

    const provider = new GoogleAuthProvider;
    const googleSignIn = ()=>{
      setLoading(true);
      return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSunscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
            console.log("user gain", user);
        })
        return () => {
            return unSunscribe();
        }

    }, [user])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;