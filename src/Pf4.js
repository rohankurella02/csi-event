import React from 'react'
import incorrect from './incorrect.png'
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import "react-awesome-button/dist/styles.css";

function Pf4() {

    let navigate = useNavigate();

    const [user] = useAuthState(auth);

    const changeScore = (async (user) => {
        await updateDoc(doc(db, 'users', user.email), {
            roundFourStatus: false,
            timeStampRoundFour: firebase.firestore.Timestamp.now().toDate().toString()
        })
        return
    })
    useEffect(() => {
        if (user) {
            changeScore(user)
        } 
    }, [user]);

    let back = () => {
        navigate("/rd4");
    }

  return (
    <div style={{textAlign: "center"}} className='Home'>
        <img className='pImg' style={{width: "600px"}} src={incorrect} alt="incorrect" />
        <h1 className='sH1'>Oops !</h1>
        <h2 className='sH2'>You have selected incorrect answer ! </h2>
        <p>All the levels in this round are completed. Results will be shortly announced</p>
        <p>Better luck next time ! 😃</p>
        <AwesomeButton onPress={back}>Play Again</AwesomeButton>
    </div>
  )
}

export default Pf4