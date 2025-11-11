import React from 'react';
import { createPost, getPost, updatePost } from './action';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    isLoading: false,
    posts: [],
    post:{}
}

const PostSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPost.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.getPost = action.payload;
            })
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
              .addCase(updatePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
                
    }

});

export default PostSlice.reducer;
