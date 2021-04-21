import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from './taskSlice'

export const TaskItem = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(props.task))}
        defaultChecked={props.task.completed}
      />
      <span>{props.task.title}</span>
      <button onClick={() => dispatch(deleteTask(props.task))}>削除</button>
    </div>
  )
}
