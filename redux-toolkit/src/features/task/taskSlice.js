import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { fetchCount } from './counterAPI'

const initialState = {
  idCount: 3,
  tasks: [
    { id: 1, title: 'TASK1', completed: false },
    { id: 2, title: 'TASK2', completed: true },
    { id: 3, title: 'TASK3', completed: false },
  ]
}

// export const incrementAsync = createAsyncThunk(
//   'task/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount)
//     return response.data
//   }
// )

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // stateに対する関数を書く
  reducers: {
    newTask: (state, action) => {
      state.idCount++
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      }
      state.tasks = [newItem, ...state.tasks]
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      task ? task.completed = !task.completed : ''
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
    }
  }
})

// component側で使える用にexportする
export const { newTask, completeTask, deleteTask } = taskSlice.actions

// 参照するstateの関数
export const selectTasks = (state) => state.task.tasks

// sliceのreducer属性をexportする(storeで使う)
export default taskSlice.reducer
