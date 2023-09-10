import React, { useReducer } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import "../../styles/form-component.css";

const Form = () => {

    const initialState = {
        formData: {
            name: {
                value: "",
                errMsg: "",
                valid: false,
                validationRules: {
                    isRequired: true
                }
            },
            email: {
                value: "",
                errMsg: "",
                valid: false,
                validationRules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            message: {
                value: "",
                errMsg: "",
                valid: false,
                validationRules: {
                    isRequired: true
                }
            }
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_STATE":
                return {
                    ...state,
                    ...action.payload
                }
            case "RESET_STATE":
                return action.payload
            default:
                return state;
        }
    };

    const [data, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {

        const updatedState = data;

        let controlName = updatedState.formData;
        let val = e.target.value;
        let name = e.target.name;

        if (controlName[name].validationRules.isRequired) {
            if (val === null || val === "") {
                controlName[name].errMsg = "Required";
                controlName[name].valid = false;
            } else {
                controlName[name].errMsg = "";
                controlName[name].valid = true;
            }
        }

        if (controlName[name].validationRules.isEmail) {
            const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (val !== "" && !pattern.test(val)) {
                controlName[name].errMsg = "Wrong Email";
                controlName[name].valid = false;
            }
        }

        controlName[name].value = val;
        controlName[name].valid = true;

        updatedState["formData"] = controlName;
        dispatch({ type: "UPDATE_STATE", payload: updatedState });
    };

    const onSubmit = (e) => {
        console.log("Clicked on Submit...!");
    };

    return (
        <>
            <div className="form-main-container">
                <div className="form-name-email-section">
                    <div className="name-container">
                        <Input type="text" label="Name" name="name" value={data.formData.name.value} errorMsg={data.formData.name.errMsg} valid={data.formData.name.valid} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="email-container">
                        <Input type="text" label="Email ID" name="email" value={data.formData.email.value} errorMsg={data.formData.email.errMsg} valid={data.formData.email.valid} onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <TextArea label="Message" name="message" value={data.formData.message.value} errorMsg={data.formData.message.errMsg} valid={data.formData.message.valid} onChange={(e) => handleChange(e)} />
                <button className="submit-btn" onClick={(e) => onSubmit(e)}>Submit</button>
            </div>
        </>
    )
};

export default Form;