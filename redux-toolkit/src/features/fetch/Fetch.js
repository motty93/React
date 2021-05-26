import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncGet, selectUsers } from './fetchSlice'

export const Fetch = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const usersList = users.map((user) => <div key={user.id}>{user.email}</div>)

  useEffect(() => {
    dispatch(fetchAsyncGet())
  }, [dispatch])

  return (
    <div>
      テストです
      {usersList}
    </div>
  )
}
