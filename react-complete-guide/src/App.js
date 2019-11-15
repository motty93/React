import React from 'react';
import './App.css';
import { Person } from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Max" age="29" />
        <Person name="manu" age="22">My Hobbieds: training</Person>
        <Person name="john" age="20" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Him I\'m a React App');
  }
}

export default App;
