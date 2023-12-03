import React, { Fragment, useState } from "react";
import "../../styles/skills-web-view.css";
import SkillItem from "./SkillItem";

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
                                            <SkillItem
                                                skillTitle="HTML"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            <SkillItem
                                                skillTitle="CSS"
                                                skillIcon={require("../../assets/images/css.png")}
                                                skillStrength={"65"}
                                            />
                                            <SkillItem
                                                skillTitle="JavaScript"
                                                skillIcon={require("../../assets/images/javascript.png")}
                                                skillStrength={"55"}
                                            />
                                        </div>
                                    </>
                                )
                            } else if (currItem === "advanced") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <SkillItem
                                                skillTitle="React.js"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"80"}
                                            />
                                            <SkillItem
                                                skillTitle="React Native"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"75"}
                                            />
                                            <SkillItem
                                                skillTitle="Redux"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"80"}
                                            />
                                            <SkillItem
                                                skillTitle="TypeScript"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                        </div>
                                    </>
                                )
                            } else if (currItem === "uxui") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <SkillItem
                                                skillTitle="BootStrap"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            <SkillItem
                                                skillTitle="MaterialUI"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            <SkillItem
                                                skillTitle="Carbon"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            <SkillItem
                                                skillTitle="ThemeForest (HTML Templates)"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                        </div>
                                    </>
                                )
                            } else if (currItem === "further") {
                                return (
                                    <>
                                        <div className="skills-data-container">
                                            <SkillItem
                                                skillTitle="Next.JS"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            <SkillItem
                                                skillTitle="Figma"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            />
                                            {/* <SkillItem
                                                skillTitle="DSA"
                                                skillIcon={require("../../assets/images/html.png")}
                                                skillStrength={"85"}
                                            /> */}
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