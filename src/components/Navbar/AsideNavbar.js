import React from 'react';
import "../../styles/aside-navbar.css";

const AsideNavbar = (props) => {

    const { data, setActive, currItem } = props;

    return (
        <>
            <div className="aside-main-container">
                <div className="aside-logo">
                    <a href="#">
                        <img src={require("../../assets/images/light-theme-logo.png")} alt="logo-img" className="logo-icon" />
                    </a>
                </div>
                <div className="aside-toggle">
                    <i className="bi bi-list toggle-icon"></i>
                </div>
                <ul className="aside-nav">
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <li key={item.id} onClick={() => setActive(item.menuName)}>
                                        <a href={item.menuLink} className={item.menuName === currItem ? 'active' : ''}>
                                            <i className={`${item.menuIcon} aside-icon-class`} />
                                            {item.menuName}
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
};

export default AsideNavbar;