import React from 'react'
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import DataTable, { createTheme } from 'react-data-table-component';

function Result() {


    const q = query(collection(db, "users"), where("roundFourStatus", "==", "passed"));

    const [users, setUsers] = React.useState();
    let array = []

    const press = (async() => {
        const querySnapshot = await getDocs(q);
        //console.log(querySnapshot)
        //console.log("Hi")
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    
        let obj = {name: doc.data().name, email: doc.data().email, timeStamp: doc.data().timeStampRoundFour.split(" ")[4]}
        array.push(obj)
        //setUsers(array.push(obj))
        
    })
    console.log(array)
    setUsers(array)
    //console.log(users)
    
    console.log(c)
});

let c = array.map((user, index) => {
    return (
        <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.timeStamp}</td>
        </tr>
    )
    console.log(user.name, index)
})

  return (
    <div style={{width: "70%"}} className='Home'>
        <h1>Result</h1>
        <button onClick={press} >press</button>
        <table class="table w-100">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {c}
        </tbody>
      </table>
    </div>
  )
}

export default Result