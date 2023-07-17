
//Below we use in useState for a stateful component, useEffect to fire off a function automatically, and 
//useContext to create the context itself

import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../base'
//Finally we need to import specific firebase functions for logging in with github and logging out
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

//Below we create a context (storage object) for all of our Authentication info
const AuthContext = React.createContext()
//Below we write a fubction that allows us to use the context in our components. We will import it any time we want
//access to the currentUser, Login or logout functionallity
export function useAuth(){
    return useContext(AuthContext)
}

//This component will peovid the AuthContext info to the children components nested inside it.
//see app.js where we call to an instance of this component and next all other components inside of it.
export default function AuthProvider({children}) {
    //Below we write 2 hooks: 1 for currentUser, sencond is a cusom hook to determine if the context 
    //has info to share with child components before rendering the children to the screen
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //Login Functionallity
    //instantiate a GithubAuthProvider object\
    const githubAuthProvider = new GithubAuthProvider()

    async function login(){
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
            //Here we could optionaly add additional logic to set a users role or save info to a local DB
        }))
    }
    //Logout functionality
    async function logout(){
        signOut(auth).then(setCurrentUser(null))
    }
    //The object below will hold currentUser, login and logout so we can use them anywhere in our app
    //we will pass this object as a prob in the return below.
    const value = { currentUser, login, logout }

    //snippet for useEffect => uef + tab
    useEffect(() => {
        //authChange will use Firebase functionality to get user info, set the currentUser hook to the value
        //retrieved, and allow components to load using our custom loading hook
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return authChange
    }, []);

  return (
    <AuthContext.Provider value={value}>
        {/* Below we are waiting for the authContext infor to populate before loading the child components in the UI */}
        {!loading && children}
    </AuthContext.Provider>
  )
}
