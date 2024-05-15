import {FaBars, FaTimes} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import './nav.css'

const Nav = () => {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('showNav')
    }
    return (
        <>
        <header>
            <div className="logo">
                <img src="logo.png" alt="website logo" />
            </div>
            <nav ref={navRef}>
                <ul className='menu'>
                    <li><a href="" className='link'>HOME</a></li>
                    <li><a href="" className='link'>SERVICES</a></li>
                    <li><a href="" className='link'>GALLERY</a></li>
                    <li><a href="" className='link'>CONTACT</a></li>
                    <li><a href="" className='link'>POLICY</a></li>
                    <button className='nav-btn nav-close-btn' onClick={showNav}>
                        <FaTimes/>
                    </button>
                </ul>
            </nav>
            <button className='nav-btn' onClick={showNav}>
                <FaBars/>
            </button>
            <button className="btn-cta">BOOK NOW</button>
        </header>
        </>
    )
}

export default Nav