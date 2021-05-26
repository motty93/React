import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

// 成功fulfilled, 処理中pending, 失敗rejected
export const fetchAsyncGet = createAsyncThunk(
  'fetch/get',
  async () => {
    const res = await axios.get(apiUrl)
    return res.data
  }
)

const initialState = {
  users: []
}

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  // createAsyncThunkを使用する場合はこっちに書く
  extraReducers: builder => {
    // action.payloadはfetchAsyncGetのreturnが入る
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      }
    })
    // builder.addCase(fetchAsyncGet.pending, (state, action) => {
    //   alert('pending!')
    //   debugger
    // })
    // builder.addCase(fetchAsyncGet.rejected, (state, action) => {
    //   alert('rejected!')
    //   debugger
    // })
  }
})

// stateに参照する関数(userSelectorで参照)
export const selectUsers = (state) => state.fetch.users

// sliceのreducer属性をexportする(storeで使用する)
export default fetchSlice.reducer
