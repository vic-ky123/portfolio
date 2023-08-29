import React from 'react';
import Input from './Input';

const Form = () => {
    return (
        <>
            <div>
                <Input type="text" label="Name" errorMsg="error" />
                <Input type="text" label="Name" errorMsg="error" />
            </div>
        </>
    )
};

export default Form;