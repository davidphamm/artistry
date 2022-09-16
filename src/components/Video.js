import React from 'react'
import './Video.css'
import paperRolls from '../assets/paperRolls.mp4'
import Content from './Content'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={paperRolls} type='video/mp4' />
        </video>
        <Content />
    </div>
  )
}

export default Video