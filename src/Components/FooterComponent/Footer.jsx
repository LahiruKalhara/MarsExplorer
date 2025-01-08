import React from 'react'
import logo from '../../images/Logo@1x.png'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className='footer'>
            <img src={logo} alt="" />
            <ul>
                <li>contact@marsexplorer.com</li>
                <li>Privacy policy</li>
                <li>Tearms & Agreements</li>
            </ul>
        </div>
    </>
  )
}

export default Footer