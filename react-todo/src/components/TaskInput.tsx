import React from 'react'
import { addTask } from '../modules/tasksModule'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

type FormData = {
  title: string
}

export const TaskInput: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, reset } = useForm<FormData>()

  // formタグで囲んでるところで動く
  const handleOnSubmit = (data: FormData) => {
    dispatch(addTask(data.title))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="input-form">
      <div className="inner">
        <input
          type="text"
          name="title"
          className="input"
          placeholder="TODOを入力して下さい。"
          ref={register({
            required: 'タイトルは必ず入力してください。',
            minLength: {
              value: 3,
              message: 'タイトルは５文字以上で入力して下さい。'
            },
            maxLength: {
              value: 10,
              message: 'タイトルは１０文字以下で入力して下さい。'
            }
          })}
        />
        <button className="btn is-primary">追加</button>
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
      </div>
    </form>
  )
}
