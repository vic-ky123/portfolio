import React from 'react';
import "../../styles/input.css";

const Input = (props) => {

    const { type, label, errorMsg, valid, value, name, onChange, onFocus, onBlur } = props;

    return (
        <>
            <div className="main-input-container">
                <div className="input-container">
                    <input required type={type} value={value} name={name} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={{ borderColor: errorMsg ? "red" : "" }} />
                    <label className="label" style={{ borderRightColor: errorMsg ? "red" : "", borderLeftColor: errorMsg ? "red" : "", color: errorMsg ? "red" : "" }}>{label}</label>
                </div>
                <p className="errorMsgStyle">{errorMsg || ""}</p>
            </div>
        </>
    )
};

export default Input;