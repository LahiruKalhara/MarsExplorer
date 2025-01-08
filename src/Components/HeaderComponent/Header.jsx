import React from 'react'
import logo from '../../images/Logo@1x.png'
import './Header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav'>
                    <ul>
                        <li>Home</li>
                        <li>Adventure</li>
                        <li>Featured News</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header