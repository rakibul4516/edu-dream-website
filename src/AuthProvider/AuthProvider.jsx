import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Auth context 
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //create user register

    const RegisterUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Logout
    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            console.log("logOut succesfully")
        })
    }



    //sign in with google
    const googleLogin = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    //unsubscribe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            return () => {
                unSubscribe()
            }

        })
    }, [])




    //sign in with github


    //sign in with twitter

    const AuthInfo = {
        user,
        RegisterUser,
        LoginUser,
        signOutUser,
        loading,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;