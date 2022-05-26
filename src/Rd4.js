import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import puzzle from './puzzle.jpg'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Rd4() {

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let onFormSubmit = (data) => {
        console.log(data.option)
        if(data.option === 'a') {
            console.log('a')
            navigate('/pf4')
        }
        if(data.option === 'b') {
            console.log('b')
            navigate('/pf4')
        }
        if(data.option === 'c') {
            console.log('c')
            navigate('/fs4')
        }
        if(data.option === 'd') {
            console.log('d')
            navigate('/pf4')
        }
    }

  return (
    <div className='Home'>
        <h1>Jigsaw Puzzle</h1>
        <p style={{textAlign: "center"}}>Level-4</p>
        <img src={puzzle} alt="puzzle" />
        <h2 style={{textAlign: "center"}}>Solve the above Jigsaw Puzzle </h2>
        <p style={{textAlign: "center", color: "green"}}>Select any one of the options below</p>
        <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            <br />
          <Form.Check type='radio' id='user'>
            <Form.Check.Input type='radio' value="a" {...register("option", {required: true})} />
            <Form.Check.Label>1-E, 2-A, 3-C, 4-B, 5-D</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="b" {...register("option", {required: true})} />
            <Form.Check.Label>1-D, 2-A, 3-E, 4-B, 5-C</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="c" {...register("option", {required: true})} />
            <Form.Check.Label>1-D, 2-E, 3-B, 4-A, 5-C</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="d" {...register("option", {required: true})} />
            <Form.Check.Label>1-C, 2-B, 3-E, 4-A, 5-D</Form.Check.Label>
          </Form.Check>

          <div style={{alignItems: "center", display: "flex", paddingTop: "23px"}}>
                    <AwesomeButton style={{margin: "auto"}} type="primary">Submit</AwesomeButton>
                </div>
          
          </Form>

    </div>
  )
}

export default Rd4