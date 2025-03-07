import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faStar, faChevronRight, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const footer = () => {
    return (
        <section className="footer-main">
            <div className="footer-container">
                <div className="footer-about_container">
                    <h2 className="footer-about_heading">About Us</h2>
                    <div className="footer-header-underline"></div>
                    {/* <img src="" alt="" className="footer-logo" /> */}
                    {/* <FontAwesomeIcon icon={faStar}/> */}
                    <div className="footer-logo"></div>
                    <p className="footer-about_text">Prime Car Wash Serves their customer with modern and efficient technologies, Our client support system always busy to make our client happier</p>
                </div>

                <div className="footer-contact_container">
                <h2 className="footer-contact_heading">Contact Us</h2>
                <div className="footer-header-underline"></div>
                    <div className="footer-contact_box">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon contact-icon-call"/>
                        <p className="footer-contact_value">+1-647-571-5182</p>
                    </div>
                    <div className="footer-contact_box">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon contact-icon-call"/>
                        <p className="footer-contact_value">birintan914@gmail.com</p>
                    </div>
                    <div className="footer-contact_box">
                        <FontAwesomeIcon icon={faLocationDot} className="contact-icon contact-icon-call"/>
                        <p className="footer-contact_value">Brampton - ON, Canada</p>
                    </div>
                </div>

                <div className="footer-links_container">
                <h2 className="footer-links_heading">Quick Links</h2>
                <div className="footer-header-underline"></div>
                    <ul className="footer-links">
                        <li><a href="" className='footer-link'><FontAwesomeIcon icon={faChevronRight} className="list-icon"/>HOME</a></li>
                        <li><a href="" className='footer-link'><FontAwesomeIcon icon={faChevronRight} className="list-icon"/>SERVICES</a></li>
                        <li><a href="" className='footer-link'><FontAwesomeIcon icon={faChevronRight} className="list-icon"/>GALLERY</a></li>
                        <li><a href="" className='footer-link'><FontAwesomeIcon icon={faChevronRight} className="list-icon"/>CONTACT</a></li>
                        <li><a href="" className='footer-link'><FontAwesomeIcon icon={faChevronRight} className="list-icon"/>POLICY</a></li>
                    </ul>
                </div>
            </div>
            <p className="footer-copyRight">&copy; 2024 [Your Company Name]. All rights reserved.</p>
        </section>
    )
}
export default footer