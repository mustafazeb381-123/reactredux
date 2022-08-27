import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.REACT_APP_API_URL,
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET',

            })
        }),
        getPostById: builder.query({
            query: (id) => {
                console.log('ID', id);
                return {
                    url: `posts/${id}`,
                    method: 'GET',
                }
            }
        }),
        postData: builder.query({
            query: () => ({
                url: `posts`,
                method: "POST",

            })
        }),
        getPostByLimit: builder.query({
            query: (num) => {
                console.log("Limit Number", num);
                return {
                    url: `posts?_limit=${num}`,
                    method: "GET",
                }
            }
        }),
        deletePostById: builder.mutation({
            query: (id) => {
                console.log("Delete Post", id);
                return {
                    url: `posts/${id}`,
                    method: "DELETE",
                
                }
            }
        }),
        createPost: builder.mutation({
            query: (newPost) => {
                console.log("Create Post", newPost);
                return {
                    url: `posts`,
                    method: "POST",
                    body: newPost,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }

                }
            }
        }), 
        updatePost: builder.mutation({
            query: (updatePostData) => {
                console.log("Update Post", updatePostData);
                const { id, ...data } = updatePostData
                console.log("Actucall data Post", data);
                return {
                    url:`posts/${id}`,
                    method: "PUT",
                    body: data,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }



                        
                }
            }
        })



    })
})

export const { useGetAllPostQuery, useGetPostByIdQuery, usePostDataQuery, useGetPostByLimitQuery, useDeletePostByIdMutation, useCreatePostMutation , useUpdatePostMutation, }  = postApi