import React, { useState }from 'react'
import './App.css'
import { Child } from './components/Child'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('')

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className="App">
      <Child message={'test'}>
        <p>子コンポーネントを渡す</p>
      </Child>
      <p>{count}</p>
      <p>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </p>
      <p>{message}</p>
      <input type="text" value={message} onChange={handleMessage}/>
    </div>
  )
}

export default App
