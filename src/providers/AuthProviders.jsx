/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const registerUser = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, name, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,
            (loggedInUser) => {
                setUser(loggedInUser);
            });
        return () => {
            unSubscribe();
        }
    }, [])

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const handleGoogleSingIn = (provider) => {
        return signInWithPopup(auth, provider)

    }

    const authInfo = {
        registerUser,
        user,
        signIn,
        logOut,
        handleGoogleSingIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;