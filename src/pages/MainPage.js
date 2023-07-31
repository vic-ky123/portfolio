import React, { useEffect, useState } from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import "../styles/main-page.css";

const MainPage = () => {

    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000)
    }, [])

    return (
        <>
            <div className="main-page-main-container">
                {
                    showSpinner ?
                        <>
                            <img src={require("../assets/images/spinner.gif")} alt="spinner" className="spinner-style" />
                        </>
                        :
                    <Portfolio />
                }

            </div>
        </>
    )
};

export default MainPage;