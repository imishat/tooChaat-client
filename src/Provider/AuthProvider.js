import React, { createContext, useEffect, useState } from 'react';
import app from './../Conponents/firebase/firebase.config';
import{createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification, sendPasswordResetEmail}from 'firebase/auth'
import Loading from '../Conponents/Shared/Loading/Loading';
export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);
    if(loading){
      <Loading/>
    }
    

    //login 
   

    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
      };
    
      const googleUser = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
      };
    
      const loginUser = (email, password) => {
        setLoading(true) 
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const verifyUser = () => {
        return sendEmailVerification(auth.currentUser);
        setLoading(true)
      };
      const logOut = () => {
        return signOut(auth);
      };
    
      const passwordEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          //   console.log("user Observing");
       
          setUser(currentUser);
          setLoading(false)
        });
    
        return () => unsubscribe();
      }, []);
    
      const authInfo = {
        createUser,
        updateUser,
        googleUser,
        loginUser,
        verifyUser,
        passwordEmail,
        user,
        logOut
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;