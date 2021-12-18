import React, { useState} from 'react';

import './App.css';

import Card from './components/UI/Card';
import EntriesList from './components/blogEntries/EntriesList';
import ActionsMenu from './components/actionsMenu/ActionsMenu';
import EntryForm from './components/EntryForm/EntryForm';

import EntriesContextProvider from './context/EntriesContextProvider';

const DUMMY_ENTRIES = [
  {id: 'e1', title: 'My Dreams!', text: 'My awesome Dreams Text!', author:'Isa', date: new Date('2021-05-12')},
  {id: 'e2', title: 'The legends!', text: 'Legends never die!', author:'Isa', date: new Date('2021-02-11')},
  {id: 'e3', title: 'Zodiac!', text: 'My zodica sign is never used!', author:'Peps', date: new Date('2019-07-30')},
  {id: 'e4', title: 'Hungry!', text: 'Tonight we dinner at hell! Because im leonidas from the great sparta if i know that no return is posible.', author:'Isa', date: new Date('2020-02-22')},
];

function App() {

  const [showingEntries, setShowingEntries] = useState(true);


  const showEntriesHandler = ()=>{
    setShowingEntries((prevState)=>{
      return !prevState;
    })
  };


  return (
    <EntriesContextProvider entries={DUMMY_ENTRIES}>
      <div className='root container'>
        <Card>
          <h1 className='title'>Hello there!</h1>
          <p>This is a personal blog creted using REACT.</p>
        </Card>

        <ActionsMenu showing={showingEntries} onChangeShow={showEntriesHandler} />

        <Card>
          {showingEntries ? <EntriesList entries={DUMMY_ENTRIES}/>: <EntryForm onSubmit={showEntriesHandler} />}
        </Card>
        
      </div>
    </EntriesContextProvider>
  );
  
}

export default App;
