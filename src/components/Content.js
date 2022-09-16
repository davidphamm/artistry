import React from 'react'
import {Link} from 'react-router-dom'

const Content = () => {
  return (
    <div className='content'>
        <h1>Welcome to Artistry </h1>
        <p>Draw. Paint. Create.</p>
    <div>
        <Link to='/contact' className='btn'>FEATURED</Link>
        <Link to='/contact' className='btn'>EXPLORE</Link>
    </div>
    </div>
  )
}

export default Content