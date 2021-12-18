import React, { useContext } from 'react';

import classes from './EntryForm.module.css';
import EntriesContext from '../../context/entriesContext';

import useInput from '../../hooks/useInput';

const EntryForm = props =>{

    const entriesCTX = useContext(EntriesContext);

    const {
        value: enteredTitle,
        hasError: titleIsInvalid,
        isValid: titleIsValid,
        changeHandler: titleChangeHandler,
        blurHandler: titleBlurHandler,
        resetInput: resetTitle
    } = useInput(value=>{
        return value !== '';
    });

    const {
        value: enteredAuthor,
        hasError: authorIsInvalid,
        isValid: authorIsValid,
        changeHandler: authorChangeHandler,
        blurHandler: authorBlurHandler,
        resetInput: resetAuthor,
    } = useInput(value =>{
        return value !== '';
    })

    const {
        value: enteredText,
        hasError: textIsInvalid,
        isValid: textIsValid,
        changeHandler: textChangeHandler,
        blurHandler: textBlurHandler,
        resetInput: resetText,
     } = useInput(value=>{
        return value !== '' && value.length < 500;
    })

    let formIsValid = false;

    if(titleIsValid && authorIsValid && textIsValid){
        formIsValid = true;
    }

    const submitHandler = event =>{
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        const entry = {
            id: Math.random(),
            title: enteredTitle,
            author: enteredAuthor,
            text: enteredText,
            date: new Date(),
        }

        entriesCTX.addEntry(entry);

        resetTitle();
        resetAuthor();
        resetText();


        props.onSubmit();
    };

    const titleInputClasses = `${classes['form-control']} ${titleIsInvalid && classes['invalid']}`

    const authorInputClasses = `${classes['form-control']} ${authorIsInvalid && classes['invalid']}`
    const textInputClasses = `${classes['form-control']} ${textIsInvalid && classes['invalid']}`


    return <form onSubmit={submitHandler}>

        <div className={titleInputClasses}>
            <div>
                <label htmlFor='title'>Title</label>
            </div>
           
            <div>
                <input id='title' type="text" onBlur={titleBlurHandler} onChange={titleChangeHandler} />
            </div>
        </div>

        <div className={authorInputClasses}>
            <div>
                <label htmlFor='autor'>Author</label>
            </div>

            <div>
                <input id='autor' type="text" onBlur={authorBlurHandler} onChange={authorChangeHandler}/>
            </div>
        </div>


        <div className={textInputClasses}>
            <div>
                <label htmlFor='text'>Text</label>
            </div>

            <div>
                <textarea rows='5' onBlur={textBlurHandler} onChange={textChangeHandler} />
            </div>
        </div>


        <button type='submit' className={classes['form-submit']}>Add Entry</button>
    </form>

};

export default EntryForm;