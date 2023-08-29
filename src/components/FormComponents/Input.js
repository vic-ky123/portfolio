import React from 'react';
import "../../styles/input.css";

const Input = (props) => {

    const { type, label, errorMsg, valid, value, name, onChange, onFocus, onBlur } = props;

    // let className;

    // if (!valid && errorMsg) {
    //     className = "error-style";
    // } else {
    //     className = "";
    // }

    return (
        <>
            <div className="main-input-container">
                <div className="input-container">
                    <input required type={type} value={value} name={name} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                    <label className="label">{label}</label>
                </div>
                <p className="errorMsgStyle">{errorMsg}</p>
            </div>
        </>
    )
};

export default Input;