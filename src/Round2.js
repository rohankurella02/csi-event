import React from 'react'
import trianglePhoto from './triangle.jpg'
import { useForm } from 'react-hook-form'
import { Form, Button } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Round2() {

    let navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let onFormSubmit = (data) => {
        console.log(data.option)
        if(data.option === 'a') {
            navigate('/r3a')
        }
        if(data.option === 'b') {
            navigate('/r3b')
        }
        if(data.option === 'c') {
            navigate('/r3c')
        }
        if(data.option === 'd') {
            navigate('/r3d')
        }
    }

  return (
    <div className='Home'>
        <h1>Level-2</h1>
        <img src={trianglePhoto} alt="triangle" />
        <h2>Find the number of triangles in the given figure</h2>
        <p style={{textAlign: "center", color: "green"}}>Select any one of the options below</p>
        <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            <br />
          <Form.Check type='radio' id='user'>
            <Form.Check.Input type='radio' value="a" {...register("option", {required: true})} />
            <Form.Check.Label>Work done using 8W of power in 2s</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="b" {...register("option", {required: true})} />
            <Form.Check.Label>(ASCII value of P) / 5</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="c" {...register("option", {required: true})} />
            <Form.Check.Label>14 + 4 / (8 - 2 * 3)</Form.Check.Label>
          </Form.Check>

          <Form.Check type='radio' id='admin'>
            <Form.Check.Input type='radio' value="d" {...register("option", {required: true})} />
            <Form.Check.Label>Speed of a car that travels 64 Km in 4 Hr</Form.Check.Label>
          </Form.Check>

          <div style={{alignItems: "center", display: "flex", paddingTop: "23px"}}>
            <AwesomeButton style={{margin: "auto"}} type="primary" >Submit </AwesomeButton>
        </div>
          
          </Form>

    </div>
  )
}

export default Round2