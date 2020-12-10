import React from 'react'
import { Task } from '../Types'

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

export const TaskItem: React.FC<Props> = ({
  task,
  handleDone,
  handleDelete
}) => {
  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
        <button onClick={() => handleDelete(task)} className="btn is-delete">
          削除
        </button>
      </label>
    </li>
  )
}
