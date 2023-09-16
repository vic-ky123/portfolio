import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import AsideNavbar from "../Navbar/AsideNavbar";
import Form from "../FormComponents/Form";

const Portfolio = () => {

    const [currItem, setCurrItem] = useState("");
    const [show, setShow] = useState(null);

    useEffect(() => {
        setCurrItem("Home");
        setShow(true);
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
        menuData.map((item) => item.menuName === menuItem ? setCurrItem(menuItem) : null);
    };

    const btnNav = (menuItem) => {
        menuData.map((item) => item.menuName === menuItem ? setCurrItem(menuItem) : null);
    };

    return (
        <>
            <div className="portfolio-main-container">
                <AsideNavbar data={menuData} setActive={setActive} currItem={currItem} />
                <div className="main-content-section">
                    {/* ******** Home Section Starts ******** */}
                    <section id="home" className={currItem === "Home" ? "home section" : "hidden"}>
                        <div className="container">
                            <div className="rowWarps">
                                <div class="banner_leftCol">
                                    <div className="home-info padd-15">
                                        <h3 className="name-tag">Hello, I'm <span className="name">Vignesh Lokeshbabu</span></h3>
                                        <div>
                                            <h3 className="my-profession">I'm a <span className="typing">Business Analyst</span></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                                        </div>
                                        <a
                                            href={require("../../assets/files/Vignesh_L_01.docx")}
                                            className="btn btn_resume"
                                            download="Example-PDF-document"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Resume</a>
                                        <button
                                            onClick={() => btnNav("Contact")}
                                            className="btn btn_contact"
                                        >Contact</button>
                                    </div>
                                </div>

                                <div className="Banner_RytCol padd-15">
                                    <div className="profileImgWrap">
                                    <img src={require("../../assets/images/dark-theme-logo.png")} alt="display-pic" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ******** Home Section Ends ******** */}

                    {/* ******** About Section Starts ******** */}
                    <section id="about" className={currItem === "About" ? "about section" : "hidden"}>
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>About Me</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="about-content padd-15">
                                    <div className="row">
                                        <div className="about-text padd-15">
                                            <h3>I'm Vignesh Lokeshbabu, I'm a <span>Frontend Developer</span></h3>
                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
                                        </div>
                                    </div>
                                    <div className="personal-info-section">
                                        <div className="personal-info padd-15">
                                            <p>
                                                <span>Date of Birth</span>
                                                <span>07-Nov-1998</span>
                                            </p>
                                            <p>
                                                <span>Degree</span>
                                                <span>MCA</span>
                                            </p>
                                            <p>
                                                <span>Years of Exp.</span>
                                                <span>1 year & 8 months</span>
                                            </p>
                                        </div>
                                        <div className="personal-info padd-15">
                                            <p>
                                                <span>City</span>
                                                <span>Chennai, India</span>
                                            </p>
                                            <p>
                                                <span>Email</span>
                                                <span>vigneshlokeshbabu131@gmail.com</span>
                                            </p>
                                            <p>
                                                <span>Mobile</span>
                                                <span>+91 9092137916</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="resume-contact-btn-section">
                                        <a
                                            href={require("../../assets/files/Vignesh_L_01.docx")}
                                            className="btn resume-btn"
                                            download="Example-PDF-document"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Resume</a>
                                        <button
                                            onClick={() => btnNav("Contact")}
                                            className="btn contact-btn"
                                        >Contact</button>
                                    </div>
                                    <div className="edu-exp-section">
                                        <div className="edu-exp-section-item padd-15">
                                            <h3>Education</h3>
                                            <div className="edu-exp-container">
                                                <div className="timeline-item">
                                                    <div className="circle-dot-initial" style={{ top: "25px" }}></div>
                                                    <div className="timeline-date-place" style={{ marginTop: "-5px" }}>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-calendar-check-fill time-line-icon"></i> 2019 - 2021
                                                        </h3>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-geo-alt-fill time-line-icon"></i> Chennai
                                                        </h3>
                                                    </div>
                                                    <h4 className="timeline-title">Master of Computer Application (MCA)</h4>
                                                    <div className="edu-details">
                                                        <p>
                                                            <span>University</span>
                                                            <span>University of Madras</span>
                                                        </p>
                                                        <p>
                                                            <span>College</span>
                                                            <span>MEASI Institute of Information Technology</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <div className="timeline-date-place">
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-calendar-check-fill time-line-icon"></i> 2016 - 2019
                                                        </h3>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-geo-alt-fill time-line-icon"></i> Chennai
                                                        </h3>
                                                    </div>
                                                    <h4 className="timeline-title">Bachelor of Computer Application (BCA)</h4>
                                                    <div className="edu-details">
                                                        <p>
                                                            <span>University</span>
                                                            <span>University of Madras</span>
                                                        </p>
                                                        <p>
                                                            <span>College</span>
                                                            <span>Jaya College of Arts & Science</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <div className="timeline-date-place">
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-calendar-check-fill time-line-icon"></i> 2015 - 2016
                                                        </h3>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-geo-alt-fill time-line-icon"></i> Chennai
                                                        </h3>
                                                    </div>
                                                    <h4 className="timeline-title">HSC (Class 12)</h4>
                                                    <div className="edu-details">
                                                        <p>
                                                            <span>Board</span>
                                                            <span>TNBSE</span>
                                                        </p>
                                                        <p>
                                                            <span>School</span>
                                                            <span>Bhaktavatsalam Vidyashram</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item" style={{ paddingBottom: "10px" }}>
                                                    <div className="circle-dot"></div>
                                                    <div className="timeline-date-place">
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-calendar-check-fill time-line-icon"></i> 2013 - 2014
                                                        </h3>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-geo-alt-fill time-line-icon"></i> Chennai
                                                        </h3>
                                                    </div>
                                                    <h4 className="timeline-title">SSC (Class 10)</h4>
                                                    <div className="edu-details">
                                                        <p>
                                                            <span>Board</span>
                                                            <span>CBSE</span>
                                                        </p>
                                                        <p>
                                                            <span>School</span>
                                                            <span>Bhaktavatsalam Vidyashram</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="edu-exp-section-item padd-15">
                                            <h3>Experience</h3>
                                            <div className="edu-exp-container">
                                                <div className="timeline-item" style={{ paddingBottom: "10px" }}>
                                                    <div className="circle-dot-initial" style={{ top: "25px" }}></div>
                                                    <div className="timeline-date-place" style={{ marginTop: "-5px" }}>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-calendar-check-fill time-line-icon"></i> Jan '22 - Present
                                                        </h3>
                                                        <h3 className="timeline-date">
                                                            <i className="bi bi-geo-alt-fill time-line-icon"></i> Chennai
                                                        </h3>
                                                    </div>
                                                    <h4 className="timeline-title">Clayfin Technologies</h4>
                                                    <div className="edu-details">
                                                        <p>
                                                            <span>Designation</span>
                                                            <span>Software developer</span>
                                                        </p>
                                                        <p>
                                                            <span>Forte</span>
                                                            <span>Front-end development</span>
                                                        </p>
                                                        <p>
                                                            <span>Skills</span>
                                                            <span>React.JS, React Native</span>
                                                        </p>
                                                        <p>
                                                            <span>Experience</span>
                                                            <span>1 year & 8 months</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ******** About Section Ends ******** */}

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
                    </section> */}

                    {/* ******** Contact Section Starts ******** */}
                    <section id="contact" className={currItem === "Contact" ? "contact section" : "hidden"}>
                        <div className="container">
                            <div className="row">
                                <div className="section-title">
                                    <h2>Contact Me</h2>
                                </div>
                            </div>
                            <div className="contact-main-container padd-15">
                                <div style={{ marginBottom: "50px" }}>
                                    <div className="feel-free-contact">
                                        <h3>Feel free to contact me</h3>
                                        <p>I'm available...</p>
                                    </div>
                                    <div className="contact-details">
                                        <div className="contact-details-item">
                                            <i className="bi bi-telephone-fill detail-icon" />
                                            <h4>on Call</h4>
                                            <p>+91 9092137916</p>
                                        </div>
                                        <div className="contact-details-item">
                                            <i className="bi bi-envelope-fill detail-icon" />
                                            <h4>thru' E-mail</h4>
                                            <p>vigneshlokeshbabu131@gmail.com</p>
                                        </div>
                                        <div className="contact-details-item">
                                            <i className="bi bi-geo-alt-fill detail-icon" />
                                            <h4>in City</h4>
                                            <p>Chennai, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="feel-free-contact">
                                        <h3>Get in-touch</h3>
                                        <p>Looking forward to reply to you... : )</p>
                                    </div>
                                    <div>
                                        <Form />
                                    </div>
                                    {/* <div className="contact-details">
                                        <div className="contact-details-item">
                                            <i className="bi bi-telephone-fill detail-icon" />
                                            <h4>on Call</h4>
                                            <p>+91 9092137916</p>
                                        </div>
                                        <div className="contact-details-item">
                                            <i className="bi bi-envelope-fill detail-icon" />
                                            <h4>thru' E-mail</h4>
                                            <p>vigneshlokeshbabu131@gmail.com</p>
                                        </div>
                                        <div className="contact-details-item">
                                            <i className="bi bi-geo-alt-fill detail-icon" />
                                            <h4>in City</h4>
                                            <p>Chennai, India</p>
                                        </div>
                                        <div className="contact-details-item">
                                            <i className="bi bi-geo-alt-fill detail-icon" />
                                            <h4>in City</h4>
                                            <p>Chennai, India</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ******** Contact Section Ends ******** */}

                </div>
            </div>
        </>
    )
};

export default Portfolio;