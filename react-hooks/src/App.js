import React from 'react'
import './App.css'
import { CounterHook } from './components/CounterHook'
import { FormHook } from './components/FormHook'
import { ItemHook } from './components/ItemHook'

function App() {
  return (
    <div className="App">
      <CounterHook />
      <FormHook />
      <ItemHook />
    </div>
  )
}

export default App
