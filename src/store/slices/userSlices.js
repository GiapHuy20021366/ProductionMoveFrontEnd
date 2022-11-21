import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    account: null,
    isLoggedIn: false
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (account, { rejectWithValue }) => {
        try {
            const data = await axios.post(
                '/api/login-partner',
                {
                    userName: account.userName, password: account.password
                }
            )
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.isLoggedIn = true
            }
        }).addCase(loginUser.rejected, (state, action) => {
            throw action.payload
        })
    }
})

export const { increment, decrement } = userSlice.actions
export default userSlice.reducer