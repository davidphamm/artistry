import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: 'white', marginRight: '2rem'}} />
                    <div>
                        <p>4. Privet Drive</p>
                        <h4>Little Whinging, SURREY</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/>1-267-436-5109</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/> abcde@hogwarts.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Art was an extra-curricular subject taught at Hogwarts School of Witchcraft and Wizardry. The class was accessible only to third year students and above. The subject was taken in a classroom on the fifth floor. As there was also a Muggle Art class, it can be presumed that this class covers art of the Wizarding world.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: 'white', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: 'white', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: 'white', marginRight: '1rem'}}/>
                </div>
                <p style={{marginTop: 20}}>Website created by <a href="https://github.com/davidphamm"><b>David Pham</b></a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer