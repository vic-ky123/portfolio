import React, { Fragment } from 'react';
import "../../styles/aside-navbar.css";

const AsideNavbar = (props) => {

    const { data, setActive, currItem } = props;

    return (
        <>
            <div className="aside-main-container">
                <div className="aside-logo">
                    <a href="#">
                        <img src={require("../../assets/images/download.jpg")} alt="logo-img" className="logo-icon" />
                    </a>
                </div>
                <div className="aside-toggle" onClick={() => console.log("Clicked on toggle...!!!")}>
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