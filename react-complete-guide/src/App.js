import React, { useState } from 'react';
import './App.css';
import { Person } from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 29 },
      { name: 'manu', age: 22 },
      { name: 'john', age: 20 },
    ],
    // otherState: 'some other value' -> useStateへ
  })

  const [otherState, setOtherState] = useState('some other value')

  const onClickSwitchButton = (newName) => {
    setPersonState ({
      persons: [
        { name: newName, age: personState.persons[0].age + 1 },
        { name: 'manu', age: personState.persons[1].age + 1 },
        { name: 'john', age: personState.persons[2].age + 1 },
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button
        onClick={onClickSwitchButton.bind(this, 'aaaaaaaa')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={onClickSwitchButton.bind(this, 'Max')}>My Hobbies: training</Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Him I\'m a React App');
}

export default app;
