import React, { Fragment, useState } from "react";
import "../../styles/skills-web-view.css";
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const SkillsWebView = () => {

    const [currItem, setCurrItem] = useState("basic");

    const skillItems = [
        {
            id: 1,
            itemTitle: "Basic",
            itemHelperText: "the foundation",
            itemRef: "basic"
        },
        {
            id: 2,
            itemTitle: "Advanced",
            itemHelperText: "the libraries & frameworks",
            itemRef: "advanced"
        },
        {
            id: 3,
            itemTitle: "UX/UI",
            itemHelperText: "the designing frameworks",
            itemRef: "uxui"
        },
        {
            id: 4,
            itemTitle: "Furthermore",
            itemHelperText: "the additional skills",
            itemRef: "further"
        }
    ];

    const selectSkill = (val) => {
        setCurrItem(val);
    }

    return (
        <>
            <div className="skills-main-container padd-15">
                <div className="skills-holder">
                    <div className="skills-left-section">
                        {
                            skillItems.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="skills-item-container" onClick={() => selectSkill(item.itemRef)}>
                                            <div className="skills-item-desc">
                                                <i className="bi bi-braces" />
                                                <div className="skills-item">
                                                    <p>{item.itemTitle}</p>
                                                    <span>{item.itemHelperText}</span>
                                                </div>
                                            </div>
                                            {currItem === item.itemRef ? <i className="bi bi-caret-right-fill" /> : <i className="bi bi-caret-right" />}
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="skills-right-section" key={currItem}>
                        {(() => {
                            if (currItem === "basic") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <div style={{ height: "80px", width: "80px" }}>
                                                <AnimatedProgressProvider
                                                    valueStart={0}
                                                    valueEnd={66}
                                                    duration={1.4}
                                                    easingFunction={easeQuadInOut}
                                                >
                                                    {value => {
                                                        const roundedValue = Math.round(value);
                                                        return (
                                                            <CircularProgressbarWithChildren
                                                                value={value}
                                                                styles={buildStyles({ pathTransition: "none" })}
                                                            >
                                                                <img
                                                                    style={{ width: 30, marginTop: -5 }}
                                                                    src="https://i.imgur.com/b9NyUGm.png"
                                                                    alt="doge"
                                                                />
                                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                                    <strong>{roundedValue}</strong> mate
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        );
                                                    }}
                                                </AnimatedProgressProvider>
                                            </div>
                                            <p>CSS</p>
                                            <p>JavaScript</p>
                                        </div>
                                    </>
                                )
                            } else if (currItem === "advanced") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <p>React.JS</p>
                                            <p>React Native</p>
                                            <p>TypeScript</p>
                                        </div>
                                    </>
                                )
                            } else if (currItem === "uxui") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <p>BootStrap</p>
                                            <p>MaterialUI</p>
                                            <p>Carbon</p>
                                            <p>HTML Templates</p>
                                        </div>
                                    </>
                                )
                            } else if (currItem === "further") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <p>Figma</p>
                                            <p>Core Java</p>
                                            <p>DSA</p>
                                        </div>
                                    </>
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    )
};

export default SkillsWebView;