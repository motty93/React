import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './App.css'
import { Child } from './components/Child'

type TitleProps = {
  blue?: boolean
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [blue, setBlue] = useState(false)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  const changeBlueColorHandler = () => {
    setBlue(!blue)
  }

  return (
    <div className="App">
      <Title blue={blue} onClick={changeBlueColorHandler}>
        React スタイル設定
      </Title>
      <Child message={'test'}>
        <p>子コンポーネントを渡す</p>
      </Child>
      <p>{count}</p>
      <p>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </p>
      <p>{message}</p>
      <input type="text" value={message} onChange={handleMessage} />
    </div>
  )
}

export default App

const Title = styled.h1<TitleProps>`
  color: red;

  ${({ blue }) =>
    blue
      ? css`
          color: blue;
        `
      : ``}
`
