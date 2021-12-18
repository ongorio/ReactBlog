import React from 'react';

import classes from './EntriesListItem.module.css';

const EntriesListItem = props =>{
    
    const truncate = text =>{
        return text.length > 25 ? text.substring(0,50) + '...' : text;
    };
    

    const entryText = truncate(props.text)

    return <div className={classes.item}>
        <div><h4>{props.title}</h4></div>
        <div><p>{entryText}</p></div>
        <span>
            <p>
                <strong>Date:</strong> {props.date.toLocaleDateString()}
                <strong> Author:</strong> {props.author}
            </p>
        </span>
        <button
            className={`${classes['button']} ${classes['left-flex']} `}
            onClick={props.onRemove.bind(null, props.id)}>
            Remove
        </button>
    </div>
};

export default EntriesListItem;