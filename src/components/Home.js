import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Home() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  // const [count, setCount] = useState(0)
  
  // const increament = () => {
  //   setCount( count + 1);
  // }

  // const decreament = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  return (
    <div>
      <h1>Home Component</h1>
      {/* <button style={{ backgroundColor: 'red', width: '100px' }} onClick={() => increament()}>+</button> */}
      <button style={{ backgroundColor: 'red', width: '100px' }} onClick={() => dispatch(increment())}>+</button>
      <h1>{ count}</h1>
      {/* <button style={{ backgroundColor: 'green', width: '100px' }} onClick={() => decreament()}>-</button> */}
      <button style={{ backgroundColor: 'green', width: '100px' }} onClick={() => dispatch(decrement())}>-</button>
      </div>
  )
}
