import React, { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import AsideNavbar from "../Navbar/AsideNavbar";
import Form from "../FormComponents/Form";
import { useMediaQuery } from "react-responsive";
import SkillsWebView from "../MenuComponents/SkillsWebView";
import SkillsMobileView from "../MenuComponents/SkillsMobileView";
// import { TypeAnimation } from "react-type-animation";
// import Typewriter from "typewriter-effect";
// import { useTypewriter } from "react-simple-typewriter";

const Portfolio = () => {

    const [currItem, setCurrItem] = useState("");
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

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
            menuName: "My Works",
            menuIcon: "bi bi-file-earmark-code-fill",
            menuLink: "#myWorks"
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

    return (
        <>
            <div className="portfolio-main-container">
                <AsideNavbar data={menuData} setActive={setActive} currItem={currItem} />
                <div className="main-content-section">
                    {/* ******** Home Section Starts ******** */}
                    <section id="home" className={currItem === "Home" ? "home section" : "hidden"}>
                        <div className="container">
                            <div className="row-wrapper">
                                <div class="banner-left-col">
                                    <div className="home-info padd-15">
                                        <h3 className="name-tag">Hello, I'm <span>Vignesh Lokeshbabu</span></h3>
                                        <div className="home-intro">
                                            <h3 className="my-profession">I'm a <span>Frontend Developer</span></h3>
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
                                            onClick={() => setActive("Contact")}
                                            className="btn btn_contact"
                                        >Contact</button>
                                    </div>
                                </div>
                                <div className="banner-right-col padd-15">
                                    <div className="profile-img-wrap">
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
                                            onClick={() => setActive("Contact")}
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
                                                            <span>1.5+ years</span>
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

                    {/* ******** Skills Section Starts ******** */}
                    <section id="skills" className={currItem === "Skills" ? "skills section" : "hidden"}>
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Skills</h2>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    isSmallScreen ? <SkillsMobileView /> : <SkillsWebView />
                                }
                            </div>
                        </div>
                    </section>
                    {/* ******** Skills Section Ends ******** */}

                    {/* ******** My Works Section Starts ******** */}
                    <section id="myWorks" className={currItem === "My Works" ? "contact section" : "hidden"}>
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>My Works</h2>
                            </div>
                        </div>
                    </section>
                    {/* ******** My Works Section Ends ******** */}

                    {/* ******** Contact Section Starts ******** */}
                    <section id="contact" className={currItem === "Contact" ? "contact section" : "hidden"}>
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Contact Me</h2>
                                </div>
                            </div>
                            <div className="contact-main-container padd-15">
                                <div style={{ marginBottom: "20px" }}>
                                    <div className="feel-free-contact">
                                        <h3>Feel free to contact me</h3>
                                        <p>I'm available...</p>
                                    </div>
                                    <div className="contact-details">
                                        <div className="contact-details-item">
                                            <i className="bi bi-telephone-fill detail-icon" />
                                            <h4>on Call</h4>
                                            <a href="//api.whatsapp.com/send?phone=919092137916" target="_blank" rel="noreferrer">+91 9092137916</a>
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
                                <div className="social-media-section">
                                    <div className="feel-free-contact">
                                        <h3>Also find me on</h3>
                                        <p>the social media...</p>
                                    </div>
                                    <div className="social-media-container">
                                        <p className="social-media-item">
                                            <span><i className="bi bi-linkedin linkedIn-icon" /></span>
                                            <span><a href="https://www.linkedin.com/in/vignesh-lokeshbabu" target="_blank" rel="noreferrer">vignesh-lokeshbabu</a></span>
                                        </p>
                                        <p className="social-media-item">
                                            <span><i className="bi bi-github gitHub-icon" /></span>
                                            <span><a href="https://github.com/vic-ky123" target="_blank" rel="noreferrer">vic-ky123</a></span>
                                        </p>
                                        <p className="social-media-item">
                                            <span><i className="bi bi-instagram instagram-icon" style={{ color: "radial-gradient(red, yellow)" }} /></span>
                                            <span><a href="https://www.instagram.com/_im_mr.melophile_/" target="_blank" rel="noreferrer">_im_mr.melophile_</a></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-get-in-touch-section">
                                    <div className="feel-free-contact">
                                        <h3>Get in-touch</h3>
                                        <p>Looking forward to reply to you... : )</p>
                                    </div>
                                    <div className="form-section">
                                        <Form />
                                    </div>
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