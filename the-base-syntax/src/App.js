import React, { useState } from 'react';
import './App.css';

import { UserInput } from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props => {
  const [usernameState, setUsernameState] = useState ({
    username: 'supermax'
  })

  const usernameChangedHandler = (e) => {
    setUsernameState ({
      username: e.target.value
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
        <UserInput
          changed={usernameChangedHandler}
          currentName={usernameState.username} />
        <UserOutput username={usernameState.username}/>
        <UserOutput username={usernameState.username}/>
        <UserOutput username={usernameState.username}/>
        <UserOutput username={usernameState.username}/>
        <UserOutput username={usernameState.username}/>
      </ol>
    </div>
  );
}

export default App;
