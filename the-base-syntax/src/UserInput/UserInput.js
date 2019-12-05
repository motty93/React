import React from 'react'

export const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
    textAlign: 'center'
  }
  return <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName} />
}
