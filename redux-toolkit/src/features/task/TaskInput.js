import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTask } from './taskSlice'

export const TaskInput = () => {
  const dispatch = useDispatch()
  const [editTitle, setEditTitle] = useState('')

  const handleTitleChange = e => {
    setEditTitle(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    if (editTitle !== '') {
      dispatch(newTask(editTitle))
      setEditTitle('')
    } else {
      alert('タスク名を入力して下さい。')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Please type in."
      />
      <button>新規タスク</button>
    </form>
  )
}
