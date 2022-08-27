import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

import { postApi, useGetAllPostQuery, useGetPostByIdQuery, usePostDataQuery, useGetPostByLimitQuery, useDeletePostByIdMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post'

export default function Home() {


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  // const response= useGetAllPostQuery();
  // const responseById = useGetPostByIdQuery(5);

  // const responsePostData = usePostDataQuery();

  // const responseLimitData = useGetPostByLimitQuery(5);

  // const [deletePost, response] = useDeletePostByIdMutation();
  // const [createPost, response] = useCreatePostMutation();
  const [updatePostData, response] = useUpdatePostMutation();

  // const newPost = {
  
  //   title: 'hii',
  //     body: 'its mustafazeb',
  //       id: 1
  
  // }
  const updatePost = {
userId:1,
    title: 'hii',
    body: 'its mustafazeb',
    id: 1

  }

  console.log('response', response)
  console.log('Data', response.data)
  console.log('isLoading', response.isLoading)
  console.log('isSuccess', response.isSuccess)
  // console.log('response', responseById);
  // console.log('response', responseById.data);
  // console.log('response', responseById.isError);
  // console.log('response', responseById.isSuccess);
  // console.log('response', responseById.isLoading);

  if(response.isLoading) return <div>Loading .....</div>

 
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

      {/* <div>
        <h1>Redux toolkit</h1>
        {
          responseById.data.map((post) => 
            <div>
              <h1> {post.id} </h1>
              <h2>{post.userId}</h2>
              <h3>{post.title}</h3>
              <hr />
            </div>
          )
        }
      </div> */}

      {/* <div>
        <h1>{ responseById.data.id}</h1>
        <h2>{ responseById.data.userId}</h2>
        <h3>{ responseById.data.title}</h3>
        <p>{responseById.data.body}</p>
        <hr />
      </div> */}

     {/* <div>
        {
          responseLimitData.data.map((post, i) =>
             <div key={i}>
           <p>{post.userId}</p>
        <p>{post.id}</p>
        <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          
          )
        }
      </div> */}

      {/* <div>
        <button onClick={()=> {deletePost(2)}} style={{backgroundColor:'gray', height:'51px', width:'70px'}}>Detele</button>
      </div> */}
       
      {/* <div>
        <h1>create Post Redux toolkit</h1>

      <button onClick={()=> {createPost(newPost)}}>createPost</button>
      </div> */}

      <div>
        <h1>Hello this redux and we complete it</h1>

        <button onClick={()=> {updatePostData(updatePost)}}>Update data</button>

      </div>
     

      <hr />
      
      </div>
  )
}
