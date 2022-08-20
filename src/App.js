import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Football";
function App() {
  return (
    <div className='center'>
    <h1>Card-Game </h1>
    <p>Hint: A team sport played between two teams. Each team has 11 players. </p>
      {
        <WordCard value={word}/>
      }
    </div>
 );
}

export default App;
