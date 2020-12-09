import React from 'react'
import './App.css'
import { Child } from './components/Child'

const App: React.FC = () => {
  return (
    <div className="App">
      <Child message={'test'}/>
    </div>
  )
}

export default App
