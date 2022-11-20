import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
    role: null,
    testNum: 1,
    isLoggedIn: false
}

const reducers = {
    increment: (state) => {
        state.testNum++
    },
    decrement: (state) => {
        state.testNum--
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: reducers
})

export const { increment, decrement } = userSlice.actions
export default userSlice.reducer