import React from 'react'

export const UserInput = (props) => {
  return <input
      type="text"
      onChange={props.changed}
      value={props.currentName} />
}
