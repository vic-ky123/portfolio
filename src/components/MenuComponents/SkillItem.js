import React, { useEffect, useState } from "react";
import "../../styles/skill-item.css";
import { motion } from "framer-motion"

const SkillItem = (props) => {

    const { skillTitle, skillIcon, skillStrength } = props;

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        strength(0, Number(skillStrength));
    }, [skillStrength]);

    const strength = (min, max) => {
        let current = min, increment = max > min ? 1 : -1;
        const timer = setInterval(() => {
            current += increment;
            setCounter(current);
            if (current === max) {
                clearInterval(timer);
            }
        }, 20);
    }


    return (
        <>
            <div className="skill-item-main-container">
                <img src={skillIcon} alt={skillTitle} className="skill-icon" />
                <div className="skill-progress-container">
                    <p>{skillTitle}</p>
                    <div className="skill-progress-bar">
                        <motion.div
                            className="skill-progress-indicator"
                            initial={{ width: "0%" }}
                            animate={{ width: `${skillStrength}%` }}
                        />
                    </div>
                </div>
                <div className="skill-strength-container" key={counter}>
                    <p><span>{counter}</span>%</p>
                </div>
            </div>
        </>
    )
};

export default SkillItem;