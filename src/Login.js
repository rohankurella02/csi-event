import React from 'react'
import { auth, provider, db } from './firebaseConf'
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect} from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import photo from './loginPhoto.png'
import GoogleButton from 'react-google-button'

function Login() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    const signOut = () => {
        auth.signOut().catch(alert)
    }

    let setUser = ( async (user) => {
        await setDoc(doc(db, 'users', user.email), {
            name: user.displayName,
            email: user.email,
            //photoURL: user.photoURL
        })
        return
})
   
    useEffect(() => {
        if (user) {
            setUser(user)
          navigate("/");
        } 
      }, [user]);

  return (
    <div style={{backgroundColor: "white", textAlign: "center"}} className="Home">
        <h1>Login</h1>
        <img style={{width: "545px"}} src={photo} alt="" />
        <p style={{color: "red"}}>Note: Please Login with your COLLEGE GMAIL ID. </p>
        <p style={{color: "red"}}>Otherwise your submission will not be considered</p>
        <GoogleButton style={{margin: "auto"}} onClick={signIn} />
    </div>
  )
}

export default Login