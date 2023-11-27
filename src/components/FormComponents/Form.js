import React, { useReducer, useRef } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import "../../styles/form-component.css";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Form = () => {

    const form = useRef();

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

        val = val.trimStart();

        if (controlName[name].validationRules.isRequired) {
            if (val === null || val === "") {
                controlName[name].errMsg = "Required";
            } else {
                controlName[name].errMsg = "";
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
        if (controlName[name].errMsg) {
            controlName[name].valid = false;
        } else {
            controlName[name].valid = true;
        }

        updatedState["formData"] = controlName;
        dispatch({ type: "UPDATE_STATE", payload: updatedState });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const updatedState = data;
        let controlName = updatedState.formData;

        if ((controlName.name.value === "" || controlName.name.value === null) || (controlName.email.value === "" || controlName.email.value === null) || (controlName.message.value === "" || controlName.message.value === null)) {
            if (controlName.name.value === "" || controlName.name.value === null) {
                controlName.name.errMsg = "Required";
            } else {
                controlName.name.errMsg = "";
            }

            if (controlName.email.value === "" || controlName.email.value === null) {
                controlName.email.errMsg = "Required";
            } else {
                controlName.email.errMsg = "";
            }

            if (controlName.message.value === "" || controlName.message.value === null) {
                controlName.message.errMsg = "Required";
            } else {
                controlName.message.errMsg = "";
            }

            updatedState["formData"] = controlName;
            dispatch({ type: "UPDATE_STATE", payload: updatedState });
        } else {
            updatedState["formData"] = controlName;
            dispatch({ type: "UPDATE_STATE", payload: updatedState });

            const sendMessage = emailjs.sendForm('service_8qvymgo', 'template_l4whudj', form.current, 'c2_3VpPA_mM9gjbEw')
                .then(() => { dispatch({ type: "RESET_STATE", payload: initialState }) })
                .catch((error) => console.error('Error sending email:', error));

            toast.promise(
                sendMessage,
                {
                    pending: {
                        render() {
                            console.log('Sending...');
                            return 'Sending... 📮'
                        },
                        icon: true,
                        position: toast.POSITION.BOTTOM_RIGHT,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "light",
                        autoClose: 2000,
                        // zIndex: 1000
                    },
                    success: {
                        render() {
                            return 'Message sent successfully 🥳'
                        },
                        icon: true,
                        position: toast.POSITION.BOTTOM_RIGHT,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                        autoClose: 2000,
                        // zIndex: 1000
                    },
                    error: {
                        render() {
                            return 'Sorry, some technical issue, please try again later 😞'
                        },
                        icon: true,
                        position: toast.POSITION.BOTTOM_RIGHT,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                        autoClose: 2000,
                        // zIndex: 1000
                    }
                }
            );
        }
    };

    return (
        <>
            <div className="form-main-container">
                <form ref={form} onSubmit={onSubmit} noValidate={true}>
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
                        <button type="submit" className="submit-btn">Submit</button>
                        {/* <button type="submit" className="submit-btn" onClick={(e) => onSubmit(e)} formNoValidate={true}>Submit</button> */}
                    </div>
                </form>
                <div className="toastify-container">
                    <ToastContainer />
                </div>
            </div>
        </>
    )
};

export default Form;