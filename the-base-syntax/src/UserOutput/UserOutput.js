import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>なんかテキトーなテキスト: {props.userName}</p>
      <p>上書きします</p>
    </div>
  )
}

export default userOutput
