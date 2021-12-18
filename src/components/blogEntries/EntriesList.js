import React, { useContext } from 'react';

import EntriesListItem from './EntriesListItem';
import EntriesContext from '../../context/entriesContext';

import classes from './EntriesList.module.css';

const EntriesList = props =>{

    const entriesCTX = useContext(EntriesContext);

    const removeEntryHandler = (id) =>{
        entriesCTX.removeEntry(id);
    }

    const entriesItems = entriesCTX.entries.map(item=>{
        return<EntriesListItem
            id={item.id}    
            key={item.id}
            title={item.title}
            text={item.text}
            author={item.author}
            date={item.date}
            onRemove={removeEntryHandler}
            />;
    });

    return <div className={classes['list']}>
        {entriesItems}
    </div>
};

export default EntriesList;