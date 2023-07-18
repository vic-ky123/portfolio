import React from "react";
import "../../styles/portfolio.css";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-main-container">
                <section id="header-section" className="portfolio-header-section">
                    <div className="portfolio-header-container">
                        <div className="portfolio-header-overlay"></div>
                    </div>
                    <div className="portfolio-header-intro-container">
                        <img src={require("../../assets/images/person-img.jpg")} alt="person-img" />
                        <div className="portfolio-header-name-holder">
                            <h3>
                                Vignesh
                                <span>Lokeshbabu</span>
                            </h3>
                        </div>
                    </div>
                    <div className="portfolio-header-curve">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 300" enable-background="new 0 0 1920 238" space="preserve">
                            <path fill="#ffffff" d="M0,0c0,0,888.955,518.735,1920,0c-0.5,149.535,0,238,0,238H0V0z" data-darkreader-inline-fill=""></path>
                        </svg>
                    </div>
                </section>
                <section id="about-section">
                    <div>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                        <p>efhjh</p>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Portfolio;