import React from 'react';
import "../../styles/text-area.css";

const TextArea = (props) => {

    const { label, errorMsg, valid, value, name, onChange, onFocus, onBlur } = props;

    return (
        <>
            <div className="main-textarea-container">
                <div className="textarea-container">
                    <textarea rows={3} required value={value} name={name} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={{ borderColor: !valid && errorMsg ? "red" : "" }}></textarea>
                    <label className="label" style={{ borderRightColor: !valid && errorMsg ? "red" : "", borderLeftColor: !valid && errorMsg ? "red" : "", color: !valid && errorMsg ? "red" : "" }}>{label}</label>
                </div>
                <p className="textarea-errorMsgStyle">{errorMsg || ""}</p>
            </div>
        </>
    )
};

export default TextArea;