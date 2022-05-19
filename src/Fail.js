import React from 'react'
import incorrect from './incorrect.png'

function Fail() {
  return (
    <div style={{textAlign: "center"}} className='Home'>
        <img className='pImg' style={{width: "600px"}} src={incorrect} alt="incorrect" />
        <h1 className='sH1'>Oops !</h1>
        <h2 className='sH2'>You have selected incorrect Options ! </h2>
        <p>Better luck next time ! 😃</p>
    </div>
  )
}

export default Fail