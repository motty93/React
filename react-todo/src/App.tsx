import React from 'react'
import { TaskList } from './components/TaskList'
import { TaskInput } from './components/TaskInput'
import { Modal } from './components/Modal'
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
      <Modal/>
    </div>
  )
}

export default App
