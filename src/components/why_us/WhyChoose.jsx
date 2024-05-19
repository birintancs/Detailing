import React, { useEffect } from "react";
import './whychoose.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faHandshake, faStar, faGauge } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
    return (
        <>
        <div className="why-main">
            <div className="why-intro">
                <h2 className="why-header">WHY CHOOSE ACS DETAILING?</h2>
                <div className="why-header-underline"></div>
            </div>
            
            <div className="why-wrapper">
                <div className="why-container">
                    <div className="why-reason-box">
                        <FontAwesomeIcon icon={faBullseye} className="why-icon icon-1"/>
                        <div className="reason-text-section">
                            <h3 className="reason-title">Mission Statement</h3>
                            <p className="reason">My mission is to provide exceptional detailing services with a focus on customer satisfaction and vehicle care. I strive to exceed your expectations and leave you completely satisfied with my service</p>
                        </div>
                    </div>
                    <div className="why-reason-box">
                        <FontAwesomeIcon icon={faHandshake} className="why-icon icon-2"/>
                        <div className="reason-text-section">
                            <h3 className="reason-title">Convenience</h3>
                            <p className="reason">You don’t have to wait in long lines or worry about bringing your vehicle to a physical location. I bring my professional auto detailing services to you, whether it’s your home, office, or another location of your choice.</p>
                        </div>
                    </div>
                    <div className="why-reason-box">
                        <FontAwesomeIcon icon={faStar} className="why-icon icon-3"/>
                        <div className="reason-text-section">
                            <h3 className="reason-title">Quality Work</h3>
                            <p className="reason">I take immense pride in delivering quality detailing services. My attention to detail ensures that every nook and cranny of your vehicle is thoroughly cleaned and restored to its pristine condition. I also use newly researched and high-quality products to ensure exceptional results.</p>
                        </div>
                    </div>
                    <div className="why-reason-box">
                    <FontAwesomeIcon icon={faGauge} className="why-icon icon-4"/>
                        <div className="reason-text-section">
                            <h3 className="reason-title">Personalized Service</h3>
                            <p className="reason">Whether you're looking for a comprehensive interior and exterior detailing package or specific treatments to address individual concerns, we work closely with you to customize our services accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default WhyChoose