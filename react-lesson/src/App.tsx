import React from 'react'
import './App.css'
import { Child } from './components/Child'

const App: React.FC = () => {
  return (
    <div className="App">
      <Child message={'test'}>
        <p>子コンポーネントを渡す</p>
     </Child>
    </div>
  )
}

export default App
