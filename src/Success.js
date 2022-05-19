import React from 'react'
import success from './pass.jpeg'

function Success() {
  return (
    <div className='Home'>
        <img className='sImg' src={success} alt="pass" />
        <h1 className='sH1'>Congratulations !</h1>
        <h2 className='sH2'>You have successfully passed this round</h2>
    </div>
  )
}

export default Success