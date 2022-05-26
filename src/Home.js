import React from 'react';
import photo from './photo.jpg'
import puzzle from './puzzle.png'
import { useForm } from 'react-hook-form'
import { Form, Button } from "react-bootstrap"
import {BiHappyAlt} from 'react-icons/bi'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import  {auth, db}  from './firebaseConf.js'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



function Home() {

  let navigate = useNavigate()
  const [user] = useAuthState(auth);
  useEffect(() => {
    
    if (!user) {
      navigate("/login");
    } 
  }, [user]);

  let ans = {option: ['PEACH', 'MARMALADE', 'OCTOBER', 'DAFFODILS', 'FAWN', 'SAGE', 'PICNIC']}


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onFormSubmit = (data) => {
    //console.log(flag)
    if(JSON.stringify(data) === JSON.stringify(ans))
    {
      navigate('/s')
    }
    else{
      navigate('/p')
    }

  };

  return (
    <div className='Home'>
      <h1 style={{ textAlign: "center" }}>WORD HUNT</h1>
      <img src={puzzle} alt="photo" />
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        
        <h3>Select the words which are present in the above table . Multiple Options are correct</h3><br />
          <Form.Check type='checkbox' id='user'>
            <Form.Check.Input type='checkbox' value="PEACH" {...register("option", {required: true})} />
            <Form.Check.Label>PEACH</Form.Check.Label>
          </Form.Check>
          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="MARMALADE" {...register("option", {required: true})} />
            <Form.Check.Label>MARMALADE</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="LIVERPOOL" {...register("option", {required: true})} />
            <Form.Check.Label>LIVERPOOL</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="HUDSON BAY" {...register("option", {required: true})} />
            <Form.Check.Label>HUDSON BAY</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="OCTOBER" {...register("option", {required: true})} />
            <Form.Check.Label>OCTOBER</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="DAFFODILS" {...register("option", {required: true})} />
            <Form.Check.Label>DAFFODILS</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="HYACINTH" {...register("option", {required: true})} />
            <Form.Check.Label>HYACINTH</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="FAWN" {...register("option", {required: true})} />
            <Form.Check.Label>FAWN</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="SAGE" {...register("option", {required: true})} />
            <Form.Check.Label>SAGE</Form.Check.Label>
          </Form.Check>

          <Form.Check type='checkbox' id='admin'>
            <Form.Check.Input type='checkbox' value="PICNIC" {...register("option", {required: true})} />
            <Form.Check.Label>PICNIC</Form.Check.Label>
          </Form.Check>

          <div style={{alignItems: "center", display: "flex", paddingTop: "23px"}}>
            <AwesomeButton style={{margin: "auto"}} type="primary" >Submit</AwesomeButton>
        </div>
          
          </Form>


    </div>
  )
}

export default Home