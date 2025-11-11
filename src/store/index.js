import { configureStore } from '@reduxjs/toolkit';
import postReducer from"../features/PostSlice" 

const store = configureStore({
    reducer: {
        data: postReducer,
    }
});

export default store;

