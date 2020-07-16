import React, { useState } from 'react'

export const FormHook = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  const setFirstNameHandler = e => {
    // useStateが複数ある場合、他のstateに影響を与えないようにスプレッド演算子でstateを展開する
    setName({ ...name, firstName: e.target.value })
  }
  const setLastNameHandler = e => {
    setName({ ...name, lastName: e.target.value })
  }
  return (
    <div>
      <h1>フォームの処理</h1>
      <div>
        <p>First Name: - {name.firstName}</p>
        <p>Last Name: - {name.lastName}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={setFirstNameHandler}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={setLastNameHandler}
        />
      </form>
      <div>{JSON.stringify(name)}</div>
    </div>
  )
}
