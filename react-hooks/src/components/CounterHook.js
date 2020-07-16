import React, { useState } from 'react'

// 関数コンポーネント
// フックを呼び出すのはトップレベルのみ
// フックを呼び出すのはReactの関数内のみ
function CounterHook() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント+</button>
    </div>
  )
}

export default CounterHook
