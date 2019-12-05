import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>なんかテキトーなテキスト: {props.username}</p>
      <p>上書きします</p>
    </div>
  )
}

export default userOutput
