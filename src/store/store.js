import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices'
import messageReducer from './slices/messageSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer
  }
});
