import React, { useEffect } from "react";
import './whychoose.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faHandshake, faStar, faGauge } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
    return (
        <>
        <div className="why-main">
            <div className="why-intro">
                <h2 className="why-header">WHY CHOOSE US?</h2>
            </div>
            
            <div className="why-wrapper">
                <div className="why-reasons-wrapper">
                    <div className="why-reason">
                        <div className="why-reason-header">Mission Statement</div>
                        <p className="why-reason-content">
                        My mission is to provide exceptional detailing services with a 
                        focus on customer satisfaction and vehicle care. I strive to exceed 
                        your expectations and leave you completely satisfied with my service. 
                        <span className="bolded-reason"> If you're not satisfied, you'll get your money-back guaranteed.</span>
                        </p>
                    </div>
                    <div className="why-reason">
                        <div className="why-reason-header">Convenience</div>
                        <p className="why-reason-content">
                        You don’t have to wait in long lines or worry about bringing your 
                        vehicle to a physical location. I bring my professional auto detailing 
                        services to you, whether it’s your home, office, or another location of your choice.
                        </p>
                    </div>
                    <div className="why-reason">
                        <div className="why-reason-header">Quality Work</div>
                        <p className="why-reason-content">
                        I take immense pride in delivering quality detailing 
                        services. My attention to detail ensures that every nook 
                        and cranny of your vehicle is thoroughly cleaned and restored 
                        to its pristine condition. I use newly researched and high-quality 
                        products to ensure exceptional results.
                        </p>
                    </div>
                </div>
                <img className="why-reasons-img">
                </img>
            </div>
            
        </div>
        </>
    )
}

export default WhyChoose