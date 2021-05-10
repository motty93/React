import React from 'react'
import { Counter } from './features/counter/Counter'
import { TaskList } from './features/task/TaskList'
import './App.css'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
      <TaskList />
    </header>
  </div>
)
