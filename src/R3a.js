import React from 'react'
import SmoothList from 'react-smooth-list';
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'
import {useState} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {useNavigate, useLocation} from 'react-router-dom'

function R3a() {

    let location = useLocation();

    let navigate = useNavigate();

    let [answer, setAnswer] = useState();

    let press = () => {
        if(answer.toUpperCase() === 'PRISM') {
            console.log('correct')
            navigate('/r3s')
            
        }
        else {
            console.log('incorrect')
            navigate('/r3p')
            console.log(location)
        }
    }

    return (
        <div className='Home'>
            <h1>Guess The Word</h1>
            <p style={{ textAlign: "center" }}>Level-3</p>
            <br />
            <br />
            <h2>Guess a word which is  a valid five-letter word. </h2>
            <h3 style={{ textAlign: "center" }}>Hit the enter button to submit</h3>
            <br />
            <h1 style={{ textAlign: "start", fontSize: "35px", color: "red" }}>HINTS:</h1>
            <SmoothList>
                <p>1.) 3-dimensional shape with two identical shapes facing each other. </p>
                <p>2.) The height is a lateral edge</p>
                <p>3.) Side faces are rectangles</p>
                <p>4.) Used to create a spectrum</p>
            </SmoothList>
            <br />
            <h4>Fill the blank down below with the suitable five lettered word</h4>
            <br />
            <FormField
                type="text"
                standard="labeleffect"
                value={answer}
                keys={'answer'}
                effect={'effect_1'}
                handleOnChange={(value) => setAnswer(value)}
                placeholder={'Enter your answer'} />
                <div style={{alignItems: "center", display: "flex", paddingTop: "23px"}}>
                    <AwesomeButton style={{margin: "auto"}} type="primary" onPress={press}>Submit</AwesomeButton>
                </div>
        </div>
    )
}

export default R3a