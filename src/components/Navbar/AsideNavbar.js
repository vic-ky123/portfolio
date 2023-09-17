import React, { Fragment, useEffect, useState } from 'react';
import "../../styles/aside-navbar.css";

const AsideNavbar = (props) => {

    const { data, setActive, currItem } = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [currItem]);

    return (
        <>
            <div className={isOpen ? "aside-main-container active" : "aside-main-container"}>
                <div className="aside-logo">
                    <a href="#">
                        <img src={require("../../assets/images/light-theme-logo.png")} alt="logo-img" className="logo-icon" />
                    </a>
                </div>
                <div className="aside-toggle" onClick={() => toggleSideBar()}>
                    <i className="bi bi-list toggle-icon"></i>
                </div>
                <ul className="aside-nav">
                    {
                        data.map((item) => {
                            return (
                                <Fragment key={item.id}>
                                    <li onClick={() => setActive(item.menuName)}>
                                        <a href={item.menuLink} className={item.menuName === currItem ? 'active' : ''}>
                                            <i className={`${item.menuIcon} aside-icon-class`} />
                                            {item.menuName}
                                        </a>
                                    </li>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
};

export default AsideNavbar;