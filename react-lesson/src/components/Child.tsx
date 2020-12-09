
import React from 'react'

type Props = {
  message: string
  children: React.ReactNode
}

export const Child: React.FC<Props> = ({ message, children }) => {
  return (
    <div>
      { children }
      <p>{message}</p>
    </div>
  )
}
