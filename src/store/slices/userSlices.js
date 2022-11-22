import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storeAuthentication } from '../../untils/authenticate'
import axios from '../../axios'
import { saveItem } from '../../untils/localStorageUntils'

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
        userNotLogin: (state, action) => {
            state.isLoggedIn = false
        },
        userIsLogin: (state, action) => {
            state.isLoggedIn = true
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const data = action.payload.data
                storeAuthentication(data.token)
                state.isLoggedIn = true
                delete data.token
                state.account = { ...data }
                saveItem('accountInformation', data)
            }
        }).addCase(loginUser.rejected, (state, action) => {
            throw action.payload
        })
    }
})

export const { userNotLogin, userIsLogin } = userSlice.actions
export default userSlice.reducer