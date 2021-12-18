import React from 'react';

const EntriesContext = React.createContext({
    entries: [],
    addEntry: (entry) =>{},
    removeEntry:(id)=>{}
})

export default EntriesContext;
