import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import AsideNavbar from "../Navbar/AsideNavbar";

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
                <div>
                    <section id="home">
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                    </section>
                    <section id="about">
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
                    </section>
                    <section id="skills">
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
                    </section>
                </div>
            </div>
        </>
    )
};

export default Portfolio;