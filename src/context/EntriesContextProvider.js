import React, { useState } from 'react';

import EntriesContext from './entriesContext';

const EntriesContextProvider = props =>{

    const [entries, setEntries] = useState(props.entries);

    const addEntryHandler = entry =>{
        console.log(entry);
        setEntries(prevState=>{
            prevState.push(entry)

            return prevState;
        
        })
    };


    const removeEntryHandler = id =>{
        setEntries(prevState=>{
            return prevState.filter((item) =>{
                return item.id !== id;
            })
        })
    };
    

    return <EntriesContext.Provider value={{
        entries,
        addEntry: addEntryHandler,
        removeEntry: removeEntryHandler,
    }}>
        {props.children}
    </EntriesContext.Provider>
};

export default EntriesContextProvider;