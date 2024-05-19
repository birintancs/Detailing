import React from "react";
import "./gallery.css"

const gallery = () => {
    return (
        <section className="gallery-main">
            <div className="gallery-intro">
                <h2 className="gallery-intro_heading"></h2>
            </div>

            <div className="slider">
                <input type="radio" name="slider" id="slide1 checked"/>
                <input type="radio" name="slider" id="slide2 checked"/>
                <input type="radio" name="slider" id="slide3 checked"/>
                <input type="radio" name="slider" id="slide4 checked"/>
                <div id="slides" className="slides">
                    <div id="overflow">
                        <div className="inner">
                            <div className="slide slide-1">
                                <div className="slide-content">
                                    <h1>Slide 1</h1>
                                    <p>Content for Slide 1</p>
                                </div>
                            </div>
                            <div className="slide slide-2">
                                <div className="slide-content">
                                    <h1>Slide 2</h1>
                                    <p>Content for Slide 2</p>
                                </div>
                            </div>
                            <div className="slide slide-3">
                                <div className="slide-content">
                                    <h1>Slide 3</h1>
                                    <p>Content for Slide 3</p>
                                </div>
                            </div>
                            <div className="slide slide-4">
                                <div className="slide-content">
                                    <h1>Slide 4</h1>
                                    <p>Content for Slide 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default gallery