import React from 'react';

import classes from './ActionsMenu.module.css';

const ActionsMenu = props =>{


    const buttonProps = props.showing ? 
        {text: 'Add Entry'} :
        {text: 'Show Entries'};


    return( 
    <>
        <hr/>
        <div className={classes.menu}>
            <h2>Entries</h2>
            <div className={classes['ml-auto']}>
                <button className={classes['action-button']} onClick={props.onChangeShow}>{buttonProps.text}</button>
            </div>
        </div>
        <hr/>
    </>
    )

};

export default ActionsMenu;