import React from 'react'

interface Props {
  name: string
}

export const UserName = ({ name }: Props) => {
  return <h1>{name}</h1>
}
