import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk('fetch/posts', async()=>{
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => data);
}); 

export const createPost = createAsyncThunk('create/Post', async (data) => {
   return await fetch('https://jsonplaceholder.typicode.com/Post', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        ...data
    })
   }).then(res => res.json()).then(data => data); 
   
});

export const updatePost = createAsyncThunk('update/Post', async(data)=>{
   return await fetch(`https://jsonplaceholder.typicode.com/posts/${data.name}`, {
    method:'PATCH',
    body: JSON.stringify({
        userId: 1,
        ...data
    })
   }).then(res=> res.json().then(data=>data));
   
});
