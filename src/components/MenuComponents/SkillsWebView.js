import React, { Fragment, useState } from "react";
import "../../styles/skills-web-view.css";

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
            id: 1,
            itemTitle: "UX/UI",
            itemHelperText: "the designing frameworks",
            itemRef: "uxui"
        },
        {
            id: 1,
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
                    <div className="skills-right-section">
                        {(() => {
                            if (currItem === "basic") {
                                return (
                                    <>
                                        <div style={{ backgroundColor: "red" }}><p>Basic</p></div>
                                    </>
                                )
                            } else if (currItem === "advanced") {
                                return (
                                    <>
                                        <p>Advanced</p>
                                    </>
                                )
                            } else if (currItem === "uxui") {
                                return (
                                    <>
                                        <p>UX/UI</p>
                                    </>
                                )
                            } else if (currItem === "further") {
                                return (
                                    <>
                                        <p>Further</p>
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