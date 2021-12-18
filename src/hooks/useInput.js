import React, { useState } from 'react';

const useInput = (validate) =>{

    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouch, setValueIsTouch] = useState('');

    const valueIsValid = validate(enteredValue);
    const valueIsInvalid = !valueIsValid && valueIsTouch;

    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value);
    };

    const valueBlurHandler = event =>{
        setValueIsTouch(true);
    };

    const resetInput = () =>{
        setEnteredValue('');
        setValueIsTouch(false);
    };

    return {
        value: enteredValue,
        hasError: valueIsInvalid,
        isValid: valueIsValid,
        changeHandler: valueChangeHandler,
        blurHandler: valueBlurHandler,
        resetInput
    }

};

export default useInput;