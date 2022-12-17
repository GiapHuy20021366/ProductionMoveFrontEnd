import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices'
import messageReducer from './slices/messageSlice';
import languageReducer from './slices/languageSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    lang: languageReducer
  }
});
