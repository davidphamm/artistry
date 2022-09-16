 import React from 'react'
 import './Form.css'
 import './Video.css'
 import paperRolls from '../assets/paperRolls.mp4'
 
 const Form = () => {
   return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={paperRolls} type='video/mp4' />
        </video>
        <div className='form'>
            <div className='content'>
                <form>
                    <label>Your Name</label>
                    <input type='text'></input>
                    <label>Email</label>
                    <input type='email'></input>
                    <label>Subject</label>
                    <input type='text'></input>
                    <label>Details</label>
                    <textarea rows='6' placeholder='Type a short message here' />
                    <button className='btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
   )
 }
 
 export default Form