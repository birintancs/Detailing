import React from "react";
import './hcontact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHandshake, faStar, faGauge } from '@fortawesome/free-solid-svg-icons';

const HContact = () => {
    return (
        <section className="contact-main">
            <div className="contact-intro">
                <h2 className="contact-header">Contact Us</h2>
                <div className="contact-header-underline"></div>
            </div>
            <div className="communications-container">
                <div className="communcation-box">
                    <FontAwesomeIcon icon={faPhone} className="contact-icon contact-icon-call"/>
                    <h4 className="communication-header">Call us</h4>
                    <p className="communication-subheader">+1-647-571-5182</p>
                </div>
            </div>
            <div className="messageBox-container">
                <h2 className="messageBox-header">Message Us</h2>
                <div className="contactInfo-container">
                    <div className="input">
                        <label htmlFor="firstName">First Name<span className="important">*</span></label>
                        <input type="text" id="firstName"/>
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name<span className="important">*</span></label>
                        <input type="text" id="lastName"/>
                    </div>
                    <div className="input">
                        <label htmlFor="mobileNumber">Mobile Number<span className="important">*</span></label>
                        <input type='text' id="mobileNumber"/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email Address<span className="important">*</span></label>
                        <input type='email' id="email"/>
                    </div>
                </div>
            </div>


        </section>
    )
}
export default HContact