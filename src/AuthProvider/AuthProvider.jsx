import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase.config';
import { onAuthStateChanged, signOut } from "firebase/auth";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Auth context 
    export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null)
        const [loader,setLoader] = useState(true)
        //create user register

        const RegisterUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
        }
    
        // login user 
        const LoginUser = (email, password) => {
            setLoader(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
    
        //unsubscribe user
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoader(false)
                return () => {
                    unSubscribe()
                }
    
            })
        }, [])
    
    
        //Logout
        const signOutUser = () => {
            setLoader(true)
            signOut(auth).then(() => {
                console.log("logOut succesfully")
            })
        }
        
    

    //sign in with google



    //sign in with github


    //sign in with twitter
     
    const AuthInfo = {
        user,
        RegisterUser,
        LoginUser,
        signOutUser,
        loader,
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