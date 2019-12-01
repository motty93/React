import React from 'react';
import './App.css';

import { UserInput } from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


function App() {
  return (
    <div className="App">
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </ol>
    </div>
  );
}

export default App;
