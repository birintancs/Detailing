import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import './package.css'
const Package = () => {
    const interiorPackage = {
        title: 'Interior',
        price: "$399",
        features: ["Thorough Vacuum",
        "Air vents cleaned",
        "Upholstery shampooed and steam cleaned",
        "Windows Cleaned",
        "Surfaces Cleaned",
        "Protectant applied on all surfaces"]
    }
    return (
        
        <section className="packages-main-section">
            <div className="packages-main">
                <div className="package-intro">
                    <h2 className="packages-main-header">PACKAGES</h2>
                    <div className="package-header-underline"></div>
                </div>

                <div className="package-table_wrapper">
                    <div className="pricing-cards">
                        <div className="row">
                            <div className="card">
                                <div className="card-pricing_header">
                                    <h4>Interior</h4>
                                    <p>Basic Interior</p>
                                    <h1 className="card-pricing_price"><span>$</span>45</h1>
                                </div>
                                <ul className="card-pricing_list">
                                    <li>Thorough Vacuum</li>
                                    <li>Upholstery shampooed and steam cleaned</li>
                                    <li>Windows Cleaned</li>
                                    <li>Thorough Cleaning of Plastics, Panels, Consoles, and vents</li>
                                </ul>
                                <div className="card-pricing-cta">
                                    <button className="cta-btn">I want this</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-pricing_header">
                                    <h4>Exterior</h4>
                                    <p>Basic Interior</p>
                                    <h1 className="card-pricing_price"><span>$</span>45</h1>
                                </div>
                                <ul className="card-pricing_list">
                                    <li>Thorough Vacuum</li>
                                    <li>Upholstery shampooed and steam cleaned</li>
                                    <li>Windows Cleaned</li>
                                    <li>Thorough Cleaning of Plastics, Panels, Consoles, and vents</li>
                                </ul>
                                <div className="card-pricing-cta">
                                    <button className="cta-btn">I want this</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-pricing_header">
                                    <h4>Exterior</h4>
                                    <p>Basic Interior</p>
                                    <h1 className="card-pricing_price"><span>$</span>45</h1>
                                </div>
                                <ul className="card-pricing_list">
                                    <li>Thorough Vacuum</li>
                                    <li>Upholstery shampooed and steam cleaned</li>
                                    <li>Windows Cleaned</li>
                                    <li>Thorough Cleaning of Plastics, Panels, Consoles, and vents</li>
                                </ul>
                                <div className="card-pricing-cta">
                                    <button className="cta-btn">I want this</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-pricing_header">
                                    <h4>Exterior</h4>
                                    <p>Basic Interior</p>
                                    <h1 className="card-pricing_price"><span>$</span>45</h1>
                                </div>
                                <ul className="card-pricing_list">
                                    <li>Thorough Vacuum</li>
                                    <li>Upholstery shampooed and steam cleaned</li>
                                    <li>Windows Cleaned</li>
                                    <li>Thorough Cleaning of Plastics, Panels, Consoles, and vents</li>
                                </ul>
                                <div className="card-pricing-cta">
                                    <button className="cta-btn">I want this</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-pricing_header">
                                    <h4>Winter</h4>
                                    <p>Basic Interior</p>
                                    <h1 className="card-pricing_price"><span>$</span>45</h1>
                                </div>
                                <ul className="card-pricing_list">
                                    <li>Thorough Vacuum</li>
                                    <li>Upholstery shampooed and steam cleaned</li>
                                    <li>Windows Cleaned</li>
                                    <li>Thorough Cleaning of Plastics, Panels, Consoles, and vents</li>
                                </ul>
                                <div className="card-pricing-cta">
                                    <button className="cta-btn">I want this</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package