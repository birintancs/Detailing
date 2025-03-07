import {FaBars, FaTimes} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import './nav.css'

const Nav = () => {
    const navRef = useRef();
    useEffect(() => {
        const navHead = document.getElementById("navHead")
        let lastscrollTop = 0;
        window.addEventListener("scroll", () => {
            let scrollTop = scrollY
            if (scrollTop > lastscrollTop) {
                navHead.style.top = '-300px'
            } else {
                navHead.style.top = '0'
            }
            lastscrollTop = scrollTop
        })
    }, [])
    const showNav = () => {
        navRef.current.classList.toggle('showNav')
    }
    return (
        <>
            <div className="logo-container">
                <div className="nav-logo-1"></div>
                {/* <div className="name-container">
                    <span className='nav-logo-name'>Spadez</span>
                    <span className='nav-logo-name'>Auto Care</span>
                </div> */}

            </div>
            <nav ref={navRef}>
                <ul className='menu'>
                    <li><a href="" className='link'>HOME</a></li>
                    <li><a href="#packages" className='link'>SERVICES</a></li>
                    <li><a href="" className='link'>GALLERY</a></li>
                    <li><a href="#contact" className='link'>CONTACT</a></li>
                    <button className='nav-btn nav-close-btn' onClick={showNav}>
                        <FaTimes/>
                    </button>
                </ul>
            </nav>
            <button className='nav-btn' onClick={showNav}>
                <FaBars/>
            </button>
            <button className="cta-btn"><a href="#packages">SCHEDULE NOW</a></button>
        </>
    )
}

export default Nav