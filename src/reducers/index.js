import { combineReducers } from '@reduxjs/toolkit';

import postSlice from '../features/PostSlice';

const rootReducer = combineReducers({
    post:postSlice,
});


export default rootReducer;