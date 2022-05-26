import React from 'react'
import SmoothList from 'react-smooth-list';
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'
import {useState} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {useNavigate} from 'react-router-dom'

function R3c() {

    let navigate = useNavigate();

    let [answer, setAnswer] = useState();

    let press = () => {
        if(answer.toUpperCase() === 'RADIO') {
            console.log('correct')
            navigate('/r3s')
        }
        else {
            console.log('incorrect')
            navigate('/r3p')
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
                <p>1.) Type of communication </p>
                <p>2.) Operates on different frequencies</p>
                <p>3.) Updates (movies, sports, news, etc..)</p>
                <p>4.) Only audio.</p>
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

export default R3c