import React from 'react';
import './App.css';

export default class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <h1>{this.props.name}</h1>
        <p>Your Age: {this.props.age}</p>
      </div>
    )
  }
}
