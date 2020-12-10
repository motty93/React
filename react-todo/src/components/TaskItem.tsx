import React from 'react'
import { Task } from '../Types'
import { doneTask, deleteTask } from '../modules/tasksModule'
import { useDispatch } from 'react-redux'

type Props = {
  task: Task
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => dispatch(doneTask(task))}
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
        <button
          onClick={() => dispatch(deleteTask(task))}
          className="btn is-delete"
        >
          削除
        </button>
      </label>
    </li>
  )
}
