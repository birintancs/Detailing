import React from "react"
import './hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <img src="" alt="" className="hero-background"/>
            <div className="hero-content">
                <div className="hero-content-intro">
                    <h1 className="hero-header">DRIVE CLEAN, FEEL PROUD</h1>
                    <p className="hero-sub">Preserve your vehicle’s value and achieve a sparkling shine inside and out</p>
                </div>
                <button className="cta-btn"><a href="#packages">SCHEDULE NOW</a></button>
            </div>
        </div>
    )
}
export default Hero