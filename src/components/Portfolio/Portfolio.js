import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import AsideNavbar from "../Navbar/AsideNavbar";
import About from "../../pages/About";

const Portfolio = () => {

    const [currItem, setCurrItem] = useState("");

    useEffect(() => {
        setCurrItem("Home");
    }, []);

    const menuData = [
        {
            id: 1,
            menuName: "Home",
            menuIcon: "bi bi-house-door-fill",
            menuLink: "#home"
        },
        {
            id: 2,
            menuName: "About",
            menuIcon: "bi bi-person-fill",
            menuLink: "#about"
        },
        {
            id: 3,
            menuName: "Skills",
            menuIcon: "bi bi-mortarboard-fill",
            menuLink: "#skills"
        },
        {
            id: 4,
            menuName: "Projects",
            menuIcon: "bi bi-file-earmark-code-fill",
            menuLink: "#projects"
        },
        {
            id: 5,
            menuName: "Contact",
            menuIcon: "bi bi-send-fill",
            menuLink: "#contact"
        }
    ];

    const setActive = (menuItem) => {
        menuData.map((item) => {
            if (item.menuName === menuItem) {
                setCurrItem(menuItem);
            }
        })
    };

    return (
        <>
            <div className="portfolio-main-container">
                <AsideNavbar data={menuData} setActive={setActive} currItem={currItem} />
                <div className="main-content-section">
                    <section id="home" className="home section">
                        <div className="container">
                            <div className="row">
                                <div className="home-info padd-15">
                                    <h3 className="name-tag">Hello, I'm <span className="name">Vignesh Lokeshbabu</span></h3>
                                    <h3 className="my-profession">I'm a <span className="typing">Frontend Developer</span></h3>
                                    <p>I'm a web Designer with extensive experience for over 10 years. My expertise is to create and website design, graphic design, and many more...</p>
                                    <a 
                                        href={require("../../assets/files/Vignesh_L_01.docx")} 
                                        className="btn btn_resume" 
                                        download="Example-PDF-document"
                                        target="_blank"
                                        rel="noreferrer"
                                    >Resume</a>
                                </div>
                                <div className="dp-img padd-15">
                                    <img src={require("../../assets/images/dark-theme-logo.png")} alt="display-pic" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <About id="about" /> */}
                    {/* <section id="about">
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                        <p>about</p>
                    </section> */}
                    {/* <section id="skills">
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                        <p>skills</p>
                    </section>
                    <section id="projects">
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                        <p>projects</p>
                    </section>
                    <section id="contact">
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                        <p>contact</p>
                    </section>  */}
                </div>
            </div>
        </>
    )
};

export default Portfolio;