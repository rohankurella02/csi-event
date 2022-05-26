import React from 'react'
import success from './pass.jpeg'
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function R3s() {

    let navigate = useNavigate();

    const [user] = useAuthState(auth);
    const changeScore = (async (user) => {
        await updateDoc(doc(db, 'users', user.email), {
            roundThreeStatus: "passed",
            timeStampRoundThree: firebase.firestore.Timestamp.now().toDate().toString()
        })
        return
    })
    useEffect(() => {
        if (user) {
            changeScore(user)
        } 
    }, [user]);

    let press = () => {
        navigate("/rd4");
    }
  return (
    <div className='Home' >
        <img className='sImg' src={success} alt="pass" />
        <h1 className='sH1'>Congratulations {user.displayName} !</h1>
        <h2 className='sH2'>You have successfully passed this round</h2>
        <p style={{textAlign: "center", color: "green"}}>Please click the button below to move to the next level</p>
        <div style={{alignItems: "center", display: "flex"}}>
            <AwesomeButton style={{margin: "auto"}} type="primary" onPress={press} >Next Level</AwesomeButton>
        </div>
    </div>
  )
}

export default R3s