import React from 'react';
import Person from './Person';

export const App = () => {
  return (
    <div>
      <Person name="Max" age="28" />
      <Person name="Bob" age="40" />
    </div>
  );
}
