import React, { useState } from 'react';
import './App.css';

import { UserInput } from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props => {
  const [userNameState, setUserNameState] = useState({
    userName: 'supermax'
  })

  const userNameChangedHandler = (e) => {
    setUserNameState({
      userName: e.target.value
    })
  }

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
        <UserOutput userName={userNameState.userName}/>
        <UserOutput userName={userNameState.userName}/>
        <UserOutput userName={userNameState.userName}/>
        <UserOutput userName={userNameState.userName}/>
      </ol>
    </div>
  );
}

export default App;
